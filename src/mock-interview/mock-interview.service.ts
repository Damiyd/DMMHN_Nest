import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMockInterviewDto } from './dto/create-mock-interview.dto';
import { UpdateMockInterviewDto } from './dto/update-mock-interview.dto';
import { MockInterview } from './entities/mock-interview.entity';

@Injectable()
export class MockInterviewService {
  constructor(
    @InjectModel(MockInterview.name)
    private mockInterviewModel: Model<MockInterview>
  ) {}
  create(createMockInterviewDto: CreateMockInterviewDto) {
    return 'This action adds a new mockInterview';
  }

  findAll() {
    return `This action returns all mockInterview`;
  }

  getRandomQuestions(id: number) {
    return `This action returns a #${id} mockInterview`;
  }

  update(id: number, updateMockInterviewDto: UpdateMockInterviewDto) {
    return `This action updates a #${id} mockInterview`;
  }

  remove(id: number) {
    return `This action removes a #${id} mockInterview`;
  }
}
