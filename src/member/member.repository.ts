import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from './entities/member.entity';
import { MemberModule } from './member.module';

@Injectable()
    export class MemberRepository {
        constructor(
            @InjectModel(Member.name)
            private memberModel: Model<Member>
            ) {}
        
    async findOneMember(memberEmail: string) {
        const findOneMember = await this.memberModel.findOne({ memberEmail })
        return findOneMember;
    }

}


