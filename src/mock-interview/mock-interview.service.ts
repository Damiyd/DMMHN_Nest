import { Injectable } from '@nestjs/common';
import { CreateMockInterviewDto } from './dto/create-mock-interview.dto';
import { UpdateMockInterviewDto } from './dto/update-mock-interview.dto';

@Injectable()
export class MockInterviewService {
  create(createMockInterviewDto: CreateMockInterviewDto) {
    return 'This action adds a new mockInterview';
  }

  findAll() {
    return `This action returns all mockInterview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mockInterview`;
  }

  update(id: number, updateMockInterviewDto: UpdateMockInterviewDto) {
    return `This action updates a #${id} mockInterview`;
  }

  remove(id: number) {
    return `This action removes a #${id} mockInterview`;
  }
}
