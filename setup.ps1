Write-Host "Setting up pxlcorp Next.js project..." -ForegroundColor Green

Write-Host "`nInstalling dependencies..." -ForegroundColor Yellow
npm install

Write-Host "`nCreating public directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path "public" -Force | Out-Null
New-Item -ItemType Directory -Path "public/images" -Force | Out-Null

Write-Host "`nTrying to copy images..." -ForegroundColor Yellow
try {
    Copy-Item -Path "../public/images/*" -Destination "public/images/" -Recurse -Force
    Write-Host "Images copied successfully!" -ForegroundColor Green
} catch {
    Write-Host "Please manually copy images from ../public/images/ to public/images/" -ForegroundColor Red
}

Write-Host "`nSetup complete! Run: npm run dev" -ForegroundColor Green
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 