/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginMemberDto } from 'src/member/dto/login-member.dto';
import { MemberRepository } from 'src/member/member.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly memberRepository: MemberRepository,
    private jwtService: JwtService,
  ) {}

  async login(loginMemberDto: LoginMemberDto) {
    const { memberEmail, password } = loginMemberDto;
    const findOneMember = await this.memberRepository.findOneMember(
      memberEmail,
    );
    if (!findOneMember) {
      throw new UnauthorizedException('이메일 및 비밀번호를 확인해주세용');
    }
    const findOnePassword = findOneMember.password;
    const findPassword = await bcrypt.compare(password, findOnePassword);
    if (!findPassword) {
      throw new UnauthorizedException('이메일 및 비밀번호를 확인해주세용');
    }

    const payload = {
      memberEmail: findOneMember.memberEmail,
    };
    const access_token = this.jwtService.sign(payload, {
      secret: process.env.SECRET_KEY,
      expiresIn: '1h',
    });
    return {
      access_token: `Bearer ${access_token}`,
    };
  }
}
