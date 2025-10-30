import { Module } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { AnalysisController } from './analysis.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { GrpcClientModule } from '../grpc-client/grpc-client.module';
import { AgentModule } from '../agent/agent.module';

@Module({
  imports: [PrismaModule, ConfigModule, GrpcClientModule, AgentModule],
  providers: [AnalysisService],
  controllers: [AnalysisController],
  exports: [AnalysisService],
})
export class AnalysisModule {}
