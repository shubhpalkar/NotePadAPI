import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(), MessageModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
