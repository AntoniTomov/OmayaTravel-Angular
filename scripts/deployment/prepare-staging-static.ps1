param(
  [Parameter(Mandatory = $true)]
  [string] $BrowserDistPath
)

$resolvedBrowserDistPath = Resolve-Path -LiteralPath $BrowserDistPath -ErrorAction Stop

$robotsPath = Join-Path $resolvedBrowserDistPath 'robots.txt'
$htaccessPath = Join-Path $resolvedBrowserDistPath '.htaccess'

@'
User-agent: *
Disallow: /
'@ | Set-Content -LiteralPath $robotsPath -Encoding utf8NoBOM -ErrorAction Stop

@'
Options -Indexes
DirectoryIndex index.html

<IfModule mod_headers.c>
  Header always set X-Robots-Tag "noindex, nofollow"
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\.(html|htm|txt|xml)$">
    Header always set Cache-Control "no-store, max-age=0"
  </FilesMatch>

  <FilesMatch "\.(js|css|png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2)$">
    Header always set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>

<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
  AddType image/avif .avif
  AddType image/webp .webp
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript application/json image/svg+xml
</IfModule>
'@ | Set-Content -LiteralPath $htaccessPath -Encoding utf8NoBOM -ErrorAction Stop

Write-Host "Prepared static staging artifact at $resolvedBrowserDistPath"
Write-Host "Wrote staging robots.txt and .htaccess"
