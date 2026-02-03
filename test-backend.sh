#!/bin/bash

# Test Backend API Script

echo "🧪 Testing Fusion26 Backend API"
echo "================================"
echo ""

# Test 1: Health Check
echo "Test 1: Health Check"
echo "--------------------"
HEALTH_RESPONSE=$(curl -s http://localhost:5000/api/health 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ Backend is running"
    echo "Response: $HEALTH_RESPONSE"
else
    echo "❌ Backend is not running"
    echo "Please start the backend with: npm run server"
    exit 1
fi
echo ""

# Test 2: Get Passkey
echo "Test 2: Get Admin Passkey"
echo "-------------------------"
PASSKEY_RESPONSE=$(curl -s http://localhost:5000/api/passkey 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ Passkey endpoint working"
    echo "Response: $PASSKEY_RESPONSE"
else
    echo "❌ Passkey endpoint failed"
fi
echo ""

# Test 3: Verify Passkey
echo "Test 3: Verify Default Passkey"
echo "-------------------------------"
VERIFY_RESPONSE=$(curl -s -X POST http://localhost:5000/api/passkey/verify \
  -H "Content-Type: application/json" \
  -d '{"passkey":"acemadmin@fusion"}' 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ Verify endpoint working"
    echo "Response: $VERIFY_RESPONSE"
    
    # Check if valid is true
    if echo "$VERIFY_RESPONSE" | grep -q '"valid":true'; then
        echo "✅ Default passkey is valid!"
    else
        echo "⚠️  Default passkey verification failed"
        echo "This might mean the database is not initialized"
    fi
else
    echo "❌ Verify endpoint failed"
fi
echo ""

# Test 4: Get Events
echo "Test 4: Get Events"
echo "------------------"
EVENTS_RESPONSE=$(curl -s http://localhost:5000/api/events 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ Events endpoint working"
    EVENT_COUNT=$(echo "$EVENTS_RESPONSE" | grep -o '"id"' | wc -l)
    echo "Found $EVENT_COUNT events"
else
    echo "❌ Events endpoint failed"
fi
echo ""

# Test 5: Get Theme
echo "Test 5: Get Theme Settings"
echo "--------------------------"
THEME_RESPONSE=$(curl -s http://localhost:5000/api/theme 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ Theme endpoint working"
    if echo "$THEME_RESPONSE" | grep -q '"header_title"'; then
        echo "✅ Theme settings found"
    else
        echo "⚠️  Theme settings might not be initialized"
    fi
else
    echo "❌ Theme endpoint failed"
fi
echo ""

echo "================================"
echo "✅ Backend API Test Complete"
echo ""
echo "If all tests passed, the backend is working correctly."
echo "If any tests failed, check:"
echo "  1. Backend server is running (npm run server)"
echo "  2. MongoDB connection is configured in .env"
echo "  3. MongoDB Atlas cluster is running"
echo "  4. Network access is configured (0.0.0.0/0)"
echo ""
