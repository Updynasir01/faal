@echo off
echo 🚀 Starting Somali Market AI Application...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "backend\node_modules" (
    echo 📦 Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)

if not exist "somali-market-ai\node_modules" (
    echo 📦 Installing frontend dependencies...
    cd somali-market-ai
    call npm install
    cd ..
)

REM Create .env file if it doesn't exist
if not exist "backend\.env" (
    echo ⚙️ Creating backend environment file...
    copy backend\config.env backend\.env
    echo ✅ Environment file created. Please edit backend\.env if needed.
)

REM Start backend in background
echo 🔧 Starting backend server...
cd backend
start "Backend Server" cmd /k "npm run dev"
cd ..

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend
echo 🎨 Starting frontend development server...
cd somali-market-ai
start "Frontend Server" cmd /k "npm run dev"
cd ..

echo ✅ Application started successfully!
echo 📱 Frontend: http://localhost:5173
echo 🔧 Backend: http://localhost:5000
echo.
echo Press any key to close this window...
pause >nul
