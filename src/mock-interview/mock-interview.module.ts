import { Module } from '@nestjs/common';
import { MockInterviewService } from './mock-interview.service';
import { MockInterviewController } from './mock-interview.controller';

@Module({
  controllers: [MockInterviewController],
  providers: [MockInterviewService]
})
export class MockInterviewModule {}
