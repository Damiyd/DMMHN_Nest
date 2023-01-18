import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MockInterviewService } from './mock-interview.service';
import { CreateMockInterviewDto } from './dto/create-mock-interview.dto';
import { UpdateMockInterviewDto } from './dto/update-mock-interview.dto';
import { JwtAuthGuard } from 'src/auth/auth.jwt.guard';
import { CurrentUser } from 'src/common/decorators/member.decorators';

@Controller('mockinterview')
export class MockInterviewController {
  constructor(private readonly mockInterviewService: MockInterviewService) {}

  @Post()
  create(@Body() createMockInterviewDto: CreateMockInterviewDto) {
    return this.mockInterviewService.create(createMockInterviewDto);
  }

  @Get()
  findAll() {
    return this.mockInterviewService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post("random")
  getRandomQuestions(@CurrentUser() memberEmail: string, @Body() category: string, number: number) {
    return this.mockInterviewService.getRandomQuestions(memberEmail, category, number);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMockInterviewDto: UpdateMockInterviewDto) {
    return this.mockInterviewService.update(+id, updateMockInterviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mockInterviewService.remove(+id);
  }
}
