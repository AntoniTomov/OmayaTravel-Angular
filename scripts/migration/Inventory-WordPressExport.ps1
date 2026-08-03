param(
  [Parameter(Mandatory = $true)]
  [string]$WordPressExportPath,

  [Parameter(Mandatory = $false)]
  [string]$MediaLibraryCsvPath,

  [Parameter(Mandatory = $false)]
  [string]$MediaRoot,

  [Parameter(Mandatory = $true)]
  [string]$OutputDirectory
)

$ErrorActionPreference = "Stop"

function New-DirectoryIfMissing {
  param([string]$Path)
  if (-not (Test-Path -LiteralPath $Path)) {
    New-Item -ItemType Directory -Path $Path | Out-Null
  }
}

function Get-NodeText {
  param(
    [System.Xml.XmlNode]$Node,
    [string]$Name,
    [string]$NamespaceUri = ""
  )

  $child = $Node.ChildNodes |
    Where-Object {
      $_.LocalName -eq $Name -and
      ([string]::IsNullOrWhiteSpace($NamespaceUri) -or $_.NamespaceURI -eq $NamespaceUri)
    } |
    Select-Object -First 1
  if ($null -eq $child) {
    return ""
  }

  return [System.Net.WebUtility]::HtmlDecode($child.InnerText.Trim())
}

function Get-CompatibleRelativePath {
  param(
    [string]$BasePath,
    [string]$TargetPath
  )

  $baseFullPath = (Resolve-Path -LiteralPath $BasePath).Path
  $targetFullPath = (Resolve-Path -LiteralPath $TargetPath).Path

  if (-not $baseFullPath.EndsWith([System.IO.Path]::DirectorySeparatorChar)) {
    $baseFullPath = $baseFullPath + [System.IO.Path]::DirectorySeparatorChar
  }

  $baseUri = [System.Uri]::new($baseFullPath)
  $targetUri = [System.Uri]::new($targetFullPath)
  $relativeUri = $baseUri.MakeRelativeUri($targetUri)

  return [System.Uri]::UnescapeDataString($relativeUri.ToString()).Replace("/", [System.IO.Path]::DirectorySeparatorChar)
}

function Get-PostMetaValues {
  param(
    [System.Xml.XmlNode]$Item,
    [string[]]$Keys
  )

  $values = @{}
  foreach ($key in $Keys) {
    $values[$key] = ""
  }

  $metaNodes = $Item.ChildNodes | Where-Object { $_.LocalName -eq "postmeta" }
  foreach ($metaNode in $metaNodes) {
    $metaKey = Get-NodeText -Node $metaNode -Name "meta_key" -NamespaceUri "http://wordpress.org/export/1.2/"
    if ($Keys -contains $metaKey) {
      $values[$metaKey] = Get-NodeText -Node $metaNode -Name "meta_value" -NamespaceUri "http://wordpress.org/export/1.2/"
    }
  }

  return $values
}

function Get-ContentUrls {
  param([string]$Html)

  if ([string]::IsNullOrWhiteSpace($Html)) {
    return @()
  }

  $matches = [System.Text.RegularExpressions.Regex]::Matches(
    $Html,
    '(?i)(?:href|src)=["'']([^"'']+)["'']'
  )

  return @($matches | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique)
}

function Get-SuggestedMediaKey {
  param([string]$RelativePath)

  $normalized = $RelativePath.Replace("\", "/").TrimStart("/")
  $parts = $normalized.Split("/")
  $fileName = $parts[-1].ToLowerInvariant()
  $fileName = $fileName -replace '[^a-z0-9._-]+', '-'

  if ($normalized -match '(?i)(logo|brand)') {
    return "shared/logos/$fileName"
  }

  if ($normalized -match '(?i)(team|person|profile)') {
    return "shared/team/$fileName"
  }

  if ($normalized -match '(?i)(testimonial|review)') {
    return "shared/testimonials/$fileName"
  }

  return "shared/uncategorized/$fileName"
}

function Get-ImageDimensions {
  param([string]$Path)

  $result = [ordered]@{
    Width = ""
    Height = ""
  }

  try {
    Add-Type -AssemblyName System.Drawing
    $image = [System.Drawing.Image]::FromFile($Path)
    $result.Width = $image.Width
    $result.Height = $image.Height
    $image.Dispose()
  }
  catch {
    $result.Width = ""
    $result.Height = ""
  }

  return $result
}

function Test-WordPressDerivative {
  param([string]$FileName)
  return $FileName -match '-[0-9]{2,5}x[0-9]{2,5}\.(jpg|jpeg|png|webp|gif)$'
}

if (-not (Test-Path -LiteralPath $WordPressExportPath)) {
  throw "WordPress export was not found: $WordPressExportPath"
}

New-DirectoryIfMissing -Path $OutputDirectory

[xml]$xml = Get-Content -LiteralPath $WordPressExportPath -Raw
$items = @($xml.rss.channel.item)

$seoKeys = @(
  "_yoast_wpseo_title",
  "_yoast_wpseo_metadesc",
  "_yoast_wpseo_canonical",
  "rank_math_title",
  "rank_math_description",
  "rank_math_canonical_url"
)

$contentInventory = New-Object System.Collections.Generic.List[object]
$mediaReferences = New-Object System.Collections.Generic.List[object]
$internalLinks = New-Object System.Collections.Generic.List[object]
$seoPostmeta = New-Object System.Collections.Generic.List[object]

foreach ($item in $items) {
  $postId = Get-NodeText -Node $item -Name "post_id" -NamespaceUri "http://wordpress.org/export/1.2/"
  $postType = Get-NodeText -Node $item -Name "post_type" -NamespaceUri "http://wordpress.org/export/1.2/"
  $status = Get-NodeText -Node $item -Name "status" -NamespaceUri "http://wordpress.org/export/1.2/"
  $title = Get-NodeText -Node $item -Name "title"
  $slug = Get-NodeText -Node $item -Name "post_name" -NamespaceUri "http://wordpress.org/export/1.2/"
  $link = Get-NodeText -Node $item -Name "link"
  $pubDate = Get-NodeText -Node $item -Name "pubDate"
  $postDate = Get-NodeText -Node $item -Name "post_date" -NamespaceUri "http://wordpress.org/export/1.2/"
  $postModified = Get-NodeText -Node $item -Name "post_modified" -NamespaceUri "http://wordpress.org/export/1.2/"
  $parent = Get-NodeText -Node $item -Name "post_parent" -NamespaceUri "http://wordpress.org/export/1.2/"
  $creator = Get-NodeText -Node $item -Name "creator" -NamespaceUri "http://purl.org/dc/elements/1.1/"
  $encodedContent = Get-NodeText -Node $item -Name "encoded" -NamespaceUri "http://purl.org/rss/1.0/modules/content/"
  $excerpt = Get-NodeText -Node $item -Name "encoded" -NamespaceUri "http://wordpress.org/export/1.2/excerpt/"
  $attachmentUrl = Get-NodeText -Node $item -Name "attachment_url" -NamespaceUri "http://wordpress.org/export/1.2/"
  $seo = Get-PostMetaValues -Item $item -Keys $seoKeys

  $urls = Get-ContentUrls -Html $encodedContent
  $mediaUrls = @($urls | Where-Object { $_ -match '(?i)\.(jpg|jpeg|png|webp|gif|svg|mp4|webm|pdf)(\?.*)?$' })
  $pageLinks = @($urls | Where-Object { $_ -notmatch '(?i)\.(jpg|jpeg|png|webp|gif|svg|mp4|webm|pdf)(\?.*)?$' })

  $contentInventory.Add([pscustomobject]@{
    id = $postId
    type = $postType
    status = $status
    slug = $slug
    url = $link
    title = $title
    published = $pubDate
    postDate = $postDate
    modified = $postModified
    parentId = $parent
    author = $creator
    excerptLength = $excerpt.Length
    contentLength = $encodedContent.Length
    mediaReferenceCount = $mediaUrls.Count
    internalLinkCount = $pageLinks.Count
    yoastTitle = $seo["_yoast_wpseo_title"]
    yoastDescription = $seo["_yoast_wpseo_metadesc"]
    yoastCanonical = $seo["_yoast_wpseo_canonical"]
    rankMathTitle = $seo["rank_math_title"]
    rankMathDescription = $seo["rank_math_description"]
    rankMathCanonical = $seo["rank_math_canonical_url"]
  })

  foreach ($key in $seoKeys) {
    if (-not [string]::IsNullOrWhiteSpace($seo[$key])) {
      $seoPostmeta.Add([pscustomobject]@{
        postId = $postId
        postType = $postType
        slug = $slug
        key = $key
        value = $seo[$key]
      })
    }
  }

  foreach ($url in $mediaUrls) {
    $mediaReferences.Add([pscustomobject]@{
      postId = $postId
      postType = $postType
      slug = $slug
      sourceUrl = $link
      mediaUrl = $url
    })
  }

  foreach ($url in $pageLinks) {
    $internalLinks.Add([pscustomobject]@{
      postId = $postId
      postType = $postType
      slug = $slug
      sourceUrl = $link
      linkUrl = $url
    })
  }
}

$contentInventory |
  Export-Csv -LiteralPath (Join-Path $OutputDirectory "content-inventory.csv") -NoTypeInformation -Encoding UTF8
$contentInventory |
  ConvertTo-Json -Depth 5 |
  Set-Content -LiteralPath (Join-Path $OutputDirectory "content-inventory.json") -Encoding UTF8
$mediaReferences |
  Export-Csv -LiteralPath (Join-Path $OutputDirectory "media-references.csv") -NoTypeInformation -Encoding UTF8
$internalLinks |
  Export-Csv -LiteralPath (Join-Path $OutputDirectory "internal-links.csv") -NoTypeInformation -Encoding UTF8
$seoPostmeta |
  Export-Csv -LiteralPath (Join-Path $OutputDirectory "seo-postmeta.csv") -NoTypeInformation -Encoding UTF8

$mediaInventory = New-Object System.Collections.Generic.List[object]

if (-not [string]::IsNullOrWhiteSpace($MediaRoot) -and (Test-Path -LiteralPath $MediaRoot)) {
  $mediaRootFullPath = (Resolve-Path -LiteralPath $MediaRoot).Path
  $files = Get-ChildItem -LiteralPath $mediaRootFullPath -Recurse -File

  foreach ($file in $files) {
    $relativePath = Get-CompatibleRelativePath -BasePath $mediaRootFullPath -TargetPath $file.FullName
    $hash = Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256
    $dimensions = Get-ImageDimensions -Path $file.FullName

    $mediaInventory.Add([pscustomobject]@{
      relativePath = $relativePath.Replace("\", "/")
      fileName = $file.Name
      extension = $file.Extension.ToLowerInvariant()
      bytes = $file.Length
      sha256 = $hash.Hash
      width = $dimensions.Width
      height = $dimensions.Height
      guessedWordPressDerivative = Test-WordPressDerivative -FileName $file.Name
      suggestedMediaKey = Get-SuggestedMediaKey -RelativePath $relativePath
    })
  }
}

if (-not [string]::IsNullOrWhiteSpace($MediaLibraryCsvPath) -and (Test-Path -LiteralPath $MediaLibraryCsvPath)) {
  Copy-Item -LiteralPath $MediaLibraryCsvPath -Destination (Join-Path $OutputDirectory "source-media-library.csv") -Force
}

$mediaInventory |
  Export-Csv -LiteralPath (Join-Path $OutputDirectory "media-inventory.csv") -NoTypeInformation -Encoding UTF8
$mediaInventory |
  ConvertTo-Json -Depth 5 |
  Set-Content -LiteralPath (Join-Path $OutputDirectory "media-inventory.json") -Encoding UTF8

$duplicateMedia = $mediaInventory |
  Group-Object -Property sha256 |
  Where-Object { $_.Count -gt 1 -and -not [string]::IsNullOrWhiteSpace($_.Name) } |
  ForEach-Object {
    foreach ($entry in $_.Group) {
      [pscustomobject]@{
        sha256 = $_.Name
        duplicateCount = $_.Count
        relativePath = $entry.relativePath
        bytes = $entry.bytes
        suggestedMediaKey = $entry.suggestedMediaKey
      }
    }
  }

$duplicateMedia |
  Export-Csv -LiteralPath (Join-Path $OutputDirectory "duplicate-media.csv") -NoTypeInformation -Encoding UTF8

$summary = [ordered]@{
  generatedAt = (Get-Date).ToString("o")
  wordpressExportPath = $WordPressExportPath
  mediaRoot = $MediaRoot
  mediaLibraryCsvPath = $MediaLibraryCsvPath
  totalItems = $contentInventory.Count
  itemsByType = @($contentInventory | Group-Object -Property type | ForEach-Object { [pscustomobject]@{ type = $_.Name; count = $_.Count } })
  itemsByStatus = @($contentInventory | Group-Object -Property status | ForEach-Object { [pscustomobject]@{ status = $_.Name; count = $_.Count } })
  mediaReferenceCount = $mediaReferences.Count
  internalLinkCount = $internalLinks.Count
  localMediaFileCount = $mediaInventory.Count
  duplicateHashGroupCount = @($duplicateMedia | Group-Object -Property sha256).Count
}

$summary |
  ConvertTo-Json -Depth 6 |
  Set-Content -LiteralPath (Join-Path $OutputDirectory "migration-summary.json") -Encoding UTF8

Write-Host "Inventory complete."
Write-Host "Output directory: $OutputDirectory"
Write-Host "Content items: $($contentInventory.Count)"
Write-Host "Media references in content: $($mediaReferences.Count)"
Write-Host "Local media files: $($mediaInventory.Count)"
