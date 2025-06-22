@echo off
echo Setting up pxlcorp Next.js project...

echo.
echo Installing dependencies...
npm install

echo.
echo Creating public directories...
if not exist "public" mkdir public
if not exist "public\images" mkdir public\images

echo.
echo Please manually copy images from ..\public\images\ to public\images\

echo.
echo Setup complete! Run: npm run dev
pause 