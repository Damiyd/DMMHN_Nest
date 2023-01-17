/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';

@Module({
  imports: [MemberModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
