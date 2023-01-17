import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MemberService {
  create(createMemberDto: CreateMemberDto) {
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

    const saltOrRounds = 5;
    const hashedPassword = bcrypt.hash(password, saltOrRounds);

    return;
  }
}
