import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';
import { GrpcClientModule } from './grpc-client/grpc-client.module';
import { WebSocketModule } from './websocket/websocket.module';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    ConversationModule,
    MessageModule,
    GrpcClientModule,
    WebSocketModule,
  ],
  providers: [],
})
export class AppModule {}
