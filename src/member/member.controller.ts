/* eslint-disable prettier/prettier */

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { LoginMemberDto } from './dto/login-member.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/auth.jwt.guard';
import { CurrentUser } from 'src/common/decorators/member.decorators';

@Controller('member')
export class MemberController {
  constructor(
    private readonly memberService: MemberService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.memberService.create(createMemberDto);
  }

  @Post('login')
  async login(@Body() loginMemberDto: LoginMemberDto) {
    return this.authService.login(loginMemberDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  async patchMember() {
    return this.memberService.patchMember()
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteMember(@CurrentUser() memberEmail: string) {
    return this.memberService.deleteMember(memberEmail);
  }
}
