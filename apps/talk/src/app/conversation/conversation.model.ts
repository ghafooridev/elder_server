import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// Lightweight user info for embedding inside Conversation/Message
export class ChatUser {
  @ApiProperty({ description: 'User ID', example: 'user_123' })
  id: string;

  @ApiPropertyOptional({ description: 'First Name', example: 'John' })
  firstName?: string;

  @ApiPropertyOptional({ description: 'Last Name', example: 'Doe' })
  lastName?: string;

  @ApiPropertyOptional({
    description: 'Avatar URL',
    example: 'https://example.com/avatar.png',
  })
  avatar?: string;

  @ApiProperty({ description: 'Online status', example: true })
  isOnline: boolean;

  @ApiProperty({
    description: 'Last seen timestamp',
    type: String,
    format: 'date-time',
    example: '2025-09-13T12:30:00Z',
  })
  lastSeenAt: Date;
}

// Conversation model
export class Conversation {
  @ApiProperty({
    description: 'Unique identifier of the conversation',
    example: 'conv_123',
  })
  readonly id: string;

  @ApiProperty({
    description: 'ID of the user who initiated the conversation',
    example: 'user_123',
  })
  initiatorId: string;

  @ApiProperty({ description: 'ID of the recipient user', example: 'user_456' })
  recipientId: string;

  @ApiPropertyOptional({
    description: 'Initiator user details',
    type: () => ChatUser,
  })
  initiator?: ChatUser;

  @ApiPropertyOptional({
    description: 'Recipient user details',
    type: () => ChatUser,
  })
  recipient?: ChatUser;

  @ApiProperty({
    description: 'Date when the conversation was created',
    type: String,
    format: 'date-time',
    example: '2025-09-13T12:00:00Z',
  })
  createdAt: Date;
}
