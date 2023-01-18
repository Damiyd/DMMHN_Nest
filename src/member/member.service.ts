import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import * as bcrypt from 'bcrypt';
import { MemberRepository } from './member.repository';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(private readonly memberRepository: MemberRepository) {}

  async create(createMemberDto: CreateMemberDto) {
    const { password, confirmPw, validate, memberEmail } = createMemberDto;

    // 비밀번호와 비밀번호 확인이 일치하는지 검사
    if (password !== confirmPw) {
      throw new UnauthorizedException(
        '비밀번호와 비밀번호 확인이 일치하지 않습니다',
      );
    }

    // email 인증 여부 확인
    if (validate !== process.env.AUTH_CODE_VALIDATE) {
      throw new UnauthorizedException('email 인증코드를 입력해주세요');
    }

    const existByEmail = await this.memberRepository.existByEmail(memberEmail);
    if (existByEmail) {
      throw new UnauthorizedException('이미 존재하는 이메일입니다');
    }

    // const saltOrRounds = process.env.saltOrRounds;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newMember = this.memberRepository.createMember(
      createMemberDto,
      hashedPassword,
    );
    return newMember;
  }

  async patchMember(memberEmail: string,updateMemberDto: UpdateMemberDto) {

    return await this.memberRepository.patchMember(memberEmail, updateMemberDto)
  }

  async deleteMember(memberEmail: string) {
    return await this.memberRepository.deleteMember(memberEmail);
  }
}
