import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Member {
  @Prop({
    required: true,
    unique: true,
  })
  memberEmail: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  confirmPw: string;

  @Prop()
  expiration: string;

  @Prop({ required: true })
  memberName: string;

  @Prop()
  birth: string;

  @Prop({ required: true })
  job: string;

  @Prop({ required: true })
  stack: [];

  @Prop({ required: true })
  gender: string;

  @Prop()
  validate: string;

  @Prop({ default: 'https://i.ibb.co/jwSbV5Z/profile-default.png' })
  img: string;
}
