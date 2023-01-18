/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MockInterviewService } from './mock-interview.service';
import { MockInterviewController } from './mock-interview.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MockInterview,
  MockInterviewSchema,
} from './entities/mock-interview.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MockInterview.name, schema: MockInterviewSchema },
    ]),
  ],
  controllers: [MockInterviewController],
  providers: [MockInterviewService],
})
export class MockInterviewModule {}
