import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Member, MemberSchema } from './entities/member.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
