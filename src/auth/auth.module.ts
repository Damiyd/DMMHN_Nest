import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MemberModule } from 'src/member/member.module';
import { JwtStrategy } from './auth.jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
    }),
    forwardRef(() => MemberModule)
  ],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
