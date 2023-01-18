import { Test, TestingModule } from '@nestjs/testing';
import { MockInterviewController } from './mock-interview.controller';

describe('MockInterviewController', () => {
  let controller: MockInterviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockInterviewController],
    }).compile();

    controller = module.get<MockInterviewController>(MockInterviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
