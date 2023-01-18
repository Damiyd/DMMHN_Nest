import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MockInterviewService } from './mock-interview.service';
import { CreateMockInterviewDto } from './dto/create-mock-interview.dto';
import { UpdateMockInterviewDto } from './dto/update-mock-interview.dto';

@Controller('mock-interview')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mockInterviewService.findOne(+id);
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
