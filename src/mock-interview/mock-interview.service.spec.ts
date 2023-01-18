import { Test, TestingModule } from '@nestjs/testing';
import { MockInterviewService } from './mock-interview.service';

describe('MockInterviewService', () => {
  let service: MockInterviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockInterviewService],
    }).compile();

    service = module.get<MockInterviewService>(MockInterviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
