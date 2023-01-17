/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from './entities/member.entity';
import { MemberModule } from './member.module';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MemberRepository {
  constructor(
    @InjectModel(Member.name)
    private memberModel: Model<Member>,
  ) {}

  async existByEmail(memberEmail) {
    const result = await this.memberModel.exists({ memberEmail });
    return result;
  }

  async createMember(createMemberDto: CreateMemberDto, hashedPassword: string) {
    const { memberEmail, memberName, birth, job, stack, gender } =
      createMemberDto;

    const newMember = this.memberModel.create({
      memberEmail,
      memberName,
      birth,
      job,
      stack,
      gender,
      password: hashedPassword,
    });

    return newMember;
  }

  async findOneMember(memberEmail: string) {
    const findOneMember = await this.memberModel.findOne({ memberEmail });
    return findOneMember;
  }
}
