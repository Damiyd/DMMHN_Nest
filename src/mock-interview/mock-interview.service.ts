import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMockInterviewDto } from './dto/create-mock-interview.dto';
import { UpdateMockInterviewDto } from './dto/update-mock-interview.dto';
import { MockInterview } from './entities/mock-interview.entity';

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

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

  async getRandomQuestions(memberEmail: string, category: string, number: number) {

    const questions = await this.mockInterviewModel.find({ category });
    const shuffledQue = shuffle(questions).slice(0, number);
    const questionArr = [];

    for (let i = 0; i < shuffledQue.length; i++) {
      questionArr.push(shuffledQue[i].question);
    }

    const data = { category, questionArr };

    return data;
  }

  update(id: number, updateMockInterviewDto: UpdateMockInterviewDto) {
    return `This action updates a #${id} mockInterview`;
  }

  remove(id: number) {
    return `This action removes a #${id} mockInterview`;
  }
}
