param(
  [int]$Port = 4201
)

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$websiteRoot = Join-Path $repoRoot 'apps\website'
$ngLog = Join-Path $repoRoot "omaya-phone-preview-ng-$Port.log"
$ngErrLog = Join-Path $repoRoot "omaya-phone-preview-ng-$Port.err.log"
$tunnelLog = Join-Path $repoRoot "omaya-phone-preview-tunnel-$Port.log"
$tunnelErrLog = Join-Path $repoRoot "omaya-phone-preview-tunnel-$Port.err.log"

function Stop-PreviewProcess {
  param([System.Diagnostics.Process]$Process)

  if ($Process -and -not $Process.HasExited) {
    Stop-Process -Id $Process.Id -Force
  }
}

Write-Host "Starting Omaya phone preview on port $Port..."
Write-Host "Logs:"
Write-Host "  Angular: $ngLog"
Write-Host "  Tunnel:  $tunnelLog"

$ngProcess = Start-Process `
  -FilePath 'npm.cmd' `
  -ArgumentList @('run', 'start', '--', '--host', '127.0.0.1', '--port', "$Port") `
  -WorkingDirectory $websiteRoot `
  -RedirectStandardOutput $ngLog `
  -RedirectStandardError $ngErrLog `
  -WindowStyle Hidden `
  -PassThru

try {
  $deadline = (Get-Date).AddSeconds(90)
  do {
    Start-Sleep -Seconds 2
    $isReady = $false

    try {
      $response = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/" -UseBasicParsing -TimeoutSec 3
      $isReady = $response.StatusCode -eq 200
    } catch {
      $isReady = $false
    }
  } until ($isReady -or (Get-Date) -gt $deadline)

  if (-not $isReady) {
    throw "Angular dev server did not become ready on http://127.0.0.1:$Port/."
  }

  $tunnelProcess = Start-Process `
    -FilePath 'npx.cmd' `
    -ArgumentList @('localtunnel', '--port', "$Port", '--local-host', '127.0.0.1') `
    -WorkingDirectory $websiteRoot `
    -RedirectStandardOutput $tunnelLog `
    -RedirectStandardError $tunnelErrLog `
    -WindowStyle Hidden `
    -PassThru

  $deadline = (Get-Date).AddSeconds(90)
  $publicUrl = $null
  do {
    Start-Sleep -Seconds 2
    if (Test-Path $tunnelLog) {
      $publicUrl = Select-String -Path $tunnelLog -Pattern 'https://[^\s]+' |
        Select-Object -First 1 |
        ForEach-Object { $_.Matches[0].Value }
    }
  } until ($publicUrl -or (Get-Date) -gt $deadline)

  if (-not $publicUrl) {
    throw 'Localtunnel did not print a public URL.'
  }

  $passwordIp = Invoke-RestMethod -Uri 'https://loca.lt/mytunnelpassword'

  Write-Host ''
  Write-Host 'Phone preview is ready:'
  Write-Host "  $publicUrl"
  Write-Host ''
  Write-Host 'If localtunnel asks for the tunnel IP/password, enter:'
  Write-Host "  $passwordIp"
  Write-Host ''
  Write-Host 'Press Ctrl+C in this terminal to stop the preview.'

  while ($true) {
    Start-Sleep -Seconds 5

    if ($ngProcess.HasExited) {
      throw 'Angular dev server stopped unexpectedly.'
    }

    if ($tunnelProcess.HasExited) {
      throw 'Localtunnel stopped unexpectedly.'
    }
  }
} finally {
  Stop-PreviewProcess -Process $tunnelProcess
  Stop-PreviewProcess -Process $ngProcess
}
