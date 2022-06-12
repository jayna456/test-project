import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { JobModule } from './job/job.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, JobModule,MongooseModule.forRoot('mongodb+srv://dds:dds123@cluster0-qxjv3.mongodb.net/job-application-test?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
