import { Module, forwardRef } from '@nestjs/common';
import { TalkGateway } from './websocket.gateway';
import { MessageModule } from '../message/message.module';
import { ConversationModule } from '../conversation/conversation.module';
import { GrpcClientModule } from '../grpc-client/grpc-client.module';

@Module({
  imports: [
    forwardRef(() => MessageModule),
    forwardRef(() => ConversationModule),
    GrpcClientModule,
  ],
  providers: [TalkGateway],
  exports: [TalkGateway],
})
export class WebSocketModule {}
