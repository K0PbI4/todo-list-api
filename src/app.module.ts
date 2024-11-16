import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schema';

@Module({
  imports: 
  [ MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/todo'),  //Подключение к MongoDB
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema}]),                   //Регистрация схемы TaskSchema
    TasksModule    ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
