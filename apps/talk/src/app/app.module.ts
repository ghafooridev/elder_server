import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';
import { GrpcClientModule } from './grpc-client/grpc-client.module';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    ConversationModule,
    MessageModule,
    GrpcClientModule,
  ],
  providers: [],
})
export class AppModule {}
