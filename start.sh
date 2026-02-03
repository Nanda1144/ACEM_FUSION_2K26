#!/bin/bash

# Fusion26 - Complete Setup and Start Script

echo "🚀 Fusion26 - Starting Application Setup"
echo "========================================"
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ ERROR: .env file not found!"
    echo ""
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "✅ .env file created"
    echo ""
    echo "⚠️  IMPORTANT: You need to configure your MongoDB connection string!"
    echo ""
    echo "Please edit .env file and add your MongoDB Atlas connection string:"
    echo "  MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/acem_db"
    echo ""
    echo "Then run this script again: ./start.sh"
    exit 1
fi

# Check if MongoDB URI is configured
MONGODB_URI=$(grep "^MONGODB_URI=" .env | cut -d '=' -f2-)
if [ -z "$MONGODB_URI" ] || [ "$MONGODB_URI" = "mongodb+srv://username:password@cluster.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority" ]; then
    echo "❌ ERROR: MongoDB URI not configured!"
    echo ""
    echo "Please edit .env file and add your actual MongoDB Atlas connection string"
    echo "Current value: $MONGODB_URI"
    echo ""
    echo "Get your connection string from:"
    echo "  1. Go to https://cloud.mongodb.com"
    echo "  2. Click 'Connect' on your cluster"
    echo "  3. Choose 'Connect your application'"
    echo "  4. Copy the connection string"
    echo "  5. Replace <password> with your actual password"
    echo "  6. Add database name 'acem_db' before the ?"
    echo ""
    exit 1
fi

echo "✅ Configuration file found"
echo "✅ MongoDB URI configured"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

# Kill any existing processes on ports 5000 and 5173
echo "🧹 Cleaning up existing processes..."
lsof -ti:5000 | xargs kill -9 2>/dev/null || true
lsof -ti:5173 | xargs kill -9 2>/dev/null || true
echo "✅ Ports cleaned"
echo ""

# Start the application
echo "🚀 Starting Fusion26 Application..."
echo ""
echo "Backend will start on: http://localhost:5000"
echo "Frontend will start on: http://localhost:5173"
echo ""
echo "Default Admin Passkey: acemadmin@fusion"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""
echo "========================================"
echo ""

# Start both servers
npm run dev:full
