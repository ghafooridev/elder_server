import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { MessageType } from '@prisma-clients/talk';

export class JoinRoomDto {
  @IsString()
  conversationId: string;

  @IsString()
  userId: string;
}

export class LeaveRoomDto {
  @IsString()
  conversationId: string;

  @IsString()
  userId: string;
}

export class SendMessageDto {
  @IsString()
  conversationId: string;

  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  attachmentUrl?: string;

  @IsOptional()
  @IsEnum(MessageType)
  messageType?: MessageType = MessageType.TEXT;
}

export class UpdateMessageDto {
  @IsString()
  messageId: string;

  @IsString()
  userId: string;

  @IsString()
  conversationId: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  attachmentUrl?: string;
}

export class DeleteMessageDto {
  @IsString()
  messageId: string;

  @IsString()
  userId: string;

  @IsString()
  conversationId: string;
}

export class TypingIndicatorDto {
  @IsString()
  conversationId: string;

  @IsString()
  userId: string;

  @IsBoolean()
  isTyping: boolean;
}

export class MessageStatusDto {
  @IsString()
  messageId: string;

  @IsString()
  userId: string;

  @IsString()
  status: 'delivered' | 'seen';
}

export class OnlineStatusDto {
  @IsString()
  userId: string;

  @IsString()
  status: 'online' | 'offline';
}
