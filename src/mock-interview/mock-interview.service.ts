/* eslint-disable prettier/prettier */
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
    private mockInterviewModel: Model<MockInterview>,
  ) {}
  async create(
    createMockInterviewDto: CreateMockInterviewDto,
    memberEmail: string,
  ) {
    const { category, question } = createMockInterviewDto;
    const newQuestion = await this.mockInterviewModel.create({
      category,
      question,
      customMemberEmail: memberEmail,
    });

    return newQuestion;
  }

  async getCustomQuestions(memberEmail: string) {
    const customQuestions = await this.mockInterviewModel.find({
      customMemberEmail: memberEmail,
    });

    return customQuestions;
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
