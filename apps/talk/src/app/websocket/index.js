const { io } = require('socket.io-client');

// Configuration
const SERVER_URL = 'http://localhost:5103/talk';
const CONVERSATION_ID = 'cmfo2wzam0000lvm1nlvafbuz';
const JWT_TOKEN_1 =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWZmM3hvOXcwMDAxbHY2M3V1eXNhMTc1IiwiaWF0IjoxNzU4MTE3NTEzLCJleHAiOjE3NTg0MDU1MTN9.tpxnozzJ_cAvWSYy3egSHKnW7UAdqMUkQ47JVKpvT6U';
const JWT_TOKEN_2 =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWZiYWhtanowMDAwbHY3ZjZxdWlyaHJkIiwiaWF0IjoxNzU4MTE4MDg5LCJleHAiOjE3NTg0MDYwODl9.RZdSSbRvRmnR-2gw0zXnIgB4IIiGe2_kCQuhQeEiVrA';

console.log('🔄 Attempting to connect to WebSocket server at:', SERVER_URL);

// Create two socket connections to simulate different users
const socket1 = io(SERVER_URL, {
  auth: {
    token: JWT_TOKEN_1,
  },
  transports: ['websocket', 'polling'],
});

const socket2 = io(SERVER_URL, {
  auth: {
    token: JWT_TOKEN_2,
  },
  transports: ['websocket', 'polling'],
});

// Connection handlers
socket1.on('connect', () => {
  console.log('🟢 User 1 connected:', socket1.id);
  testAllFunctionality();
});

socket2.on('connect', () => {
  console.log('🟢 User 2 connected:', socket2.id);
});

socket1.on('disconnect', () => {
  console.log('🔴 User 1 disconnected');
});

socket2.on('disconnect', () => {
  console.log('🔴 User 2 disconnected');
});

// Error handlers
socket1.on('connect_error', (error) => {
  console.error('❌ Socket 1 connection error:', error.message);
  console.error('❌ Error details:', error);
});

socket2.on('connect_error', (error) => {
  console.error('❌ Socket 2 connection error:', error.message);
  console.error('❌ Error details:', error);
});

socket1.on('error', (error) => {
  console.error('❌ Socket 1 error:', error);
});

socket2.on('error', (error) => {
  console.error('❌ Socket 2 error:', error);
});

socket1.on('exception', (error) => {
  console.error('❌ Socket 1 exception:', error);
});

socket2.on('exception', (error) => {
  console.error('❌ Socket 2 exception:', error);
});

// Event listeners for User 1
socket1.on('joinedRoom', (data) => {
  console.log('✅ User 1 joined room:', data);
});

socket1.on('newMessage', (data) => {
  console.log('📨 User 1 received new message:', data);
});

socket1.on('messageUpdated', (data) => {
  console.log('✏️ User 1 received message update:', data);
});

socket1.on('messageDeleted', (data) => {
  console.log('🗑️ User 1 received message deletion:', data);
});

socket1.on('userTyping', (data) => {
  console.log('⌨️ User 1 sees typing:', data);
});

socket1.on('messageStatusUpdated', (data) => {
  console.log('📋 User 1 message status updated:', data);
});

socket1.on('userOnline', (data) => {
  console.log('🟢 User came online:', data);
});

socket1.on('userOffline', (data) => {
  console.log('🔴 User went offline:', data);
});

socket1.on('onlineUsers', (data) => {
  console.log('👥 Online users:', data);
});

socket1.on('messageDelivered', (data) => {
  console.log('✅ Message delivered:', data);
});

// Event listeners for User 2
socket2.on('joinedRoom', (data) => {
  console.log('✅ User 2 joined room:', data);
});

socket2.on('newMessage', (data) => {
  console.log('📨 User 2 received new message:', data);
});

socket2.on('messageUpdated', (data) => {
  console.log('✏️ User 2 received message update:', data);
});

socket2.on('messageDeleted', (data) => {
  console.log('🗑️ User 2 received message deletion:', data);
});

socket2.on('userTyping', (data) => {
  console.log('⌨️ User 2 sees typing:', data);
});

// Test all functionality
async function testAllFunctionality() {
  console.log('\n🚀 Starting WebSocket functionality tests...\n');

  // Wait a bit for connection to stabilize
  await sleep(1000);

  // Test 1: Join rooms
  console.log('📍 Test 1: Joining conversation rooms');
  socket1.emit('joinRoom', {
    conversationId: CONVERSATION_ID,
    userId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID
  });

  socket2.emit('joinRoom', {
    conversationId: CONVERSATION_ID,
    userId: 'cmfbahmjz0000lv7f6quirhrd', // User 2 ID
  });

  await sleep(1000);

  // Test 2: Get online users
  console.log('\n👥 Test 2: Getting online users');
  socket1.emit('getOnlineUsers', {
    userId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID
  });

  await sleep(1000);

  // Test 3: Send message
  console.log('\n📨 Test 3: Sending message');
  const messageData = {
    conversationId: CONVERSATION_ID,
    senderId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID from JWT
    receiverId: 'cmfbahmjz0000lv7f6quirhrd', // User 2 ID from JWT
    content: 'Hello from User 1! This is a test message.',
    messageType: 'TEXT',
    userId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID
  };
  socket1.emit('sendMessage', messageData);

  await sleep(2000);

  // Test 4: Typing indicator
  console.log('\n⌨️ Test 4: Typing indicators');
  socket2.emit('typing', {
    conversationId: CONVERSATION_ID,
    userId: 'cmfbahmjz0000lv7f6quirhrd', // User 2 ID
    isTyping: true,
  });

  await sleep(1000);

  socket2.emit('typing', {
    conversationId: CONVERSATION_ID,
    userId: 'cmfbahmjz0000lv7f6quirhrd', // User 2 ID
    isTyping: false,
  });

  await sleep(1000);

  // Test 5: Update message (assuming we have a message ID)
  console.log('\n✏️ Test 5: Updating message');
  const updateData = {
    messageId: 'message-uuid-here', // Replace with actual message ID
    conversationId: CONVERSATION_ID,
    content: 'Updated message content!',
    userId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID
  };
  socket1.emit('updateMessage', updateData);

  await sleep(2000);

  // Test 6: Message status update
  console.log('\n📋 Test 6: Message status update');
  socket2.emit('messageStatus', {
    messageId: 'message-uuid-here', // Replace with actual message ID
    status: 'delivered',
    userId: 'cmfbahmjz0000lv7f6quirhrd', // User 2 ID
  });

  await sleep(1000);

  socket2.emit('messageStatus', {
    messageId: 'message-uuid-here', // Replace with actual message ID
    status: 'read',
    userId: 'cmfbahmjz0000lv7f6quirhrd', // User 2 ID
  });

  await sleep(2000);

  // Test 7: Delete message
  console.log('\n🗑️ Test 7: Deleting message');
  const deleteData = {
    messageId: 'message-uuid-here', // Replace with actual message ID
    conversationId: CONVERSATION_ID,
    userId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID
  };
  socket1.emit('deleteMessage', deleteData);

  await sleep(2000);

  // Test 8: Leave rooms
  console.log('\n📍 Test 8: Leaving conversation rooms');
  socket1.emit('leaveRoom', {
    conversationId: CONVERSATION_ID,
    userId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID
  });

  socket2.emit('leaveRoom', {
    conversationId: CONVERSATION_ID,
    userId: 'cmfbahmjz0000lv7f6quirhrd', // User 2 ID
  });

  await sleep(1000);

  console.log('\n✅ All tests completed!');
  console.log(
    '\n💡 Note: Replace UUIDs and JWT token with real values for actual testing'
  );

  // Keep connection alive for manual testing
  console.log('\n🔄 Connections will remain open for manual testing...');
  console.log('Press Ctrl+C to exit');
}

// Utility function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n👋 Closing connections...');
  socket1.disconnect();
  socket2.disconnect();
  process.exit(0);
});

// Additional manual testing functions
function sendTestMessage(content) {
  socket1.emit('sendMessage', {
    conversationId: CONVERSATION_ID,
    content: content,
    type: 'text',
    userId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID
  });
}

function startTyping() {
  socket1.emit('typing', {
    conversationId: CONVERSATION_ID,
    userId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID
    isTyping: true,
  });
}

function stopTyping() {
  socket1.emit('typing', {
    conversationId: CONVERSATION_ID,
    userId: 'cmff3xo9w0001lv63uuysa175', // User 1 ID
    isTyping: false,
  });
}

// Export functions for manual testing
global.sendTestMessage = sendTestMessage;
global.startTyping = startTyping;
global.stopTyping = stopTyping;

console.log('\n📋 Available manual test functions:');
console.log('- sendTestMessage("your message")');
console.log('- startTyping()');
console.log('- stopTyping()');
