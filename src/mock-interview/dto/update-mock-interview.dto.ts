import { PartialType } from '@nestjs/mapped-types';
import { CreateMockInterviewDto } from './create-mock-interview.dto';

export class UpdateMockInterviewDto extends PartialType(CreateMockInterviewDto) {}
