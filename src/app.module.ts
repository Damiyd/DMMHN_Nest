/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { MockInterviewModule } from './mock-interview/mock-interview.module';

@Module({
  imports: [
    MemberModule,
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST),
    MockInterviewModule, 
    ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
