import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
import { LogModule } from './log/log.module';

@Module({
  // imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
  imports: [LogModule],
})
export class AppModule {}
