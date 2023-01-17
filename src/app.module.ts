/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MemberModule, 
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST), 
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
