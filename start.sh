#!/bin/bash

echo "🚀 Starting Somali Market AI Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
    echo "⚠️  MongoDB is not running. Please start MongoDB first."
    echo "   On macOS: brew services start mongodb-community"
    echo "   On Windows: Start MongoDB service from Services"
    echo "   On Linux: sudo systemctl start mongod"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend
    npm install
    cd ..
fi

if [ ! -d "somali-market-ai/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd somali-market-ai
    npm install
    cd ..
fi

# Create .env file if it doesn't exist
if [ ! -f "backend/.env" ]; then
    echo "⚙️  Creating backend environment file..."
    cp backend/config.env backend/.env
    echo "✅ Environment file created. Please edit backend/.env if needed."
fi

# Start backend in background
echo "🔧 Starting backend server..."
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Start frontend
echo "🎨 Starting frontend development server..."
cd somali-market-ai
npm run dev &
FRONTEND_PID=$!
cd ..

echo "✅ Application started successfully!"
echo "📱 Frontend: http://localhost:5173"
echo "🔧 Backend: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
trap "echo '🛑 Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
