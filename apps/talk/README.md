# Talk Module - Real-time Communication

The Talk module provides real-time messaging capabilities using WebSocket connections. It supports conversations, message delivery, typing indicators, and online status tracking.

## Features

- **Real-time messaging**: Send and receive messages instantly
- **Conversation management**: Create and manage conversations between users
- **Typing indicators**: Show when users are typing
- **Message status tracking**: Track delivery and read status
- **Online presence**: See who's online/offline
- **Authentication**: Secure WebSocket connections with JWT

## WebSocket Events

### Client to Server Events

#### `joinRoom`

Join a conversation room to receive real-time updates.

```typescript
{
  conversationId: string;
  userId: string;
}
```

#### `leaveRoom`

Leave a conversation room.

```typescript
{
  conversationId: string;
  userId: string;
}
```

#### `sendMessage`

Send a message in real-time.

```typescript
{
  conversationId: string;
  senderId: string;
  receiverId: string;
  content?: string;
  attachmentUrl?: string;
  messageType?: 'TEXT' | 'IMAGE' | 'VOICE' | 'VIDEO';
}
```

#### `typing`

Send typing indicator.

```typescript
{
  conversationId: string;
  userId: string;
  isTyping: boolean;
}
```

#### `messageStatus`

Update message status (delivered/seen).

```typescript
{
  messageId: string;
  userId: string;
  status: 'delivered' | 'seen';
}
```

#### `getOnlineUsers`

Get list of currently online users.

### Server to Client Events

#### `newMessage`

Receive new message in conversation.

```typescript
{
  message: Message;
  conversationId: string;
}
```

#### `userTyping`

Receive typing indicator from other users.

```typescript
{
  userId: string;
  conversationId: string;
  isTyping: boolean;
}
```

#### `messageStatusUpdated`

Receive message status updates.

```typescript
{
  messageId: string;
  status: 'delivered' | 'seen';
  updatedBy: string;
}
```

#### `userOnline` / `userOffline`

Receive user online status changes.

```typescript
{
  userId: string;
  status: 'online' | 'offline';
}
```

#### `onlineUsers`

Receive list of online users.

```typescript
{
  users: string[];
}
```

## Client Connection

### JavaScript/TypeScript Client Example

```typescript
import { io, Socket } from 'socket.io-client';

const socket: Socket = io('ws://localhost:3000/talk', {
  query: {
    userId: 'your-user-id',
    token: 'your-jwt-token',
  },
});

// Join a conversation
socket.emit('joinRoom', {
  conversationId: 'conversation-id',
  userId: 'your-user-id',
});

// Send a message
socket.emit('sendMessage', {
  conversationId: 'conversation-id',
  senderId: 'your-user-id',
  receiverId: 'recipient-user-id',
  content: 'Hello, world!',
  messageType: 'TEXT',
});

// Listen for new messages
socket.on('newMessage', (data) => {
  console.log('New message:', data.message);
});

// Listen for typing indicators
socket.on('userTyping', (data) => {
  console.log(`User ${data.userId} is ${data.isTyping ? 'typing' : 'stopped typing'}`);
});

// Send typing indicator
socket.emit('typing', {
  conversationId: 'conversation-id',
  userId: 'your-user-id',
  isTyping: true,
});
```

### React Hook Example

```typescript
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocket = (userId: string, token: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newSocket = io('ws://localhost:3000/talk', {
      query: { userId, token },
    });

    newSocket.on('connect', () => {
      setIsConnected(true);
    });

    newSocket.on('disconnect', () => {
      setIsConnected(false);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [userId, token]);

  return { socket, isConnected };
};
```

## Authentication

WebSocket connections require authentication via JWT token. You can provide the token in two ways:

1. **Query parameter**: `?token=your-jwt-token`
2. **Authorization header**: `Authorization: Bearer your-jwt-token`

## Error Handling

The server emits error events when operations fail:

```typescript
socket.on('error', (error) => {
  console.error('WebSocket error:', error.message);
});
```

## Dependencies

Make sure to install the required WebSocket dependencies:

```bash
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io
```

## Environment Variables

Set the JWT secret in your environment:

```bash
JWT_SECRET=your-secret-key
```

## Running the Talk Service

```bash
# Development
npm run talk:serve

# Production
npm run talk:build
npm run talk:start
```

The WebSocket server will be available at `ws://localhost:3000/talk`.
