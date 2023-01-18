/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MockInterviewService } from './mock-interview.service';
import { CreateMockInterviewDto } from './dto/create-mock-interview.dto';
import { UpdateMockInterviewDto } from './dto/update-mock-interview.dto';
import { CurrentUser } from 'src/common/decorators/member.decorators';
import { JwtAuthGuard } from 'src/auth/auth.jwt.guard';

@Controller('mockInterview')
export class MockInterviewController {
  constructor(private readonly mockInterviewService: MockInterviewService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createMockInterviewDto: CreateMockInterviewDto,
    @CurrentUser() memberEmail: string,
  ) {
    return this.mockInterviewService.create(
      createMockInterviewDto,
      memberEmail,
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getCustomQuestions(@CurrentUser() memberEmail: string) {
    return this.mockInterviewService.getCustomQuestions(memberEmail);
  }

  @UseGuards(JwtAuthGuard)
  @Post('random')
  getRandomQuestions(@CurrentUser() memberEmail: string, @Body() body) {
    const { category, number } = body;

    return this.mockInterviewService.getRandomQuestions(
      memberEmail,
      category,
      number,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMockInterviewDto: UpdateMockInterviewDto,
  ) {
    return this.mockInterviewService.update(+id, updateMockInterviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mockInterviewService.remove(+id);
  }
}
