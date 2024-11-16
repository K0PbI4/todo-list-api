import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from '../schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module
({
  imports: 
  [ MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]) ],  //Регистрация модели Task со схемой TaskSchema
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
