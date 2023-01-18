/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class MockInterview {
  @Prop({
    required: true,
  })
  category: string;

  @Prop({
    required: true,
  })
  question: string;

  @Prop()
  customMemberEmail: string;
}

export const MockInterviewSchema = SchemaFactory.createForClass(MockInterview);
