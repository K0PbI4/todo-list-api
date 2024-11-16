import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dtos/create-task.dto';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';
import { TaskDocument } from 'src/schemas/task.schema';

@Injectable()                   //Декорация класса как сервиса
export class TasksService {
    constructor(
        @InjectModel('Task') private readonly taskModel: Model<TaskDocument>    //Внедрение можели Task
    ) {}

    async getAll(): Promise<TaskDocument[]> {                           //Получение всех задач
        return await this.taskModel.find().exec()
    }

    async findById(id: string): Promise<TaskDocument | null>            //Поиск задачи по id
    {
        try {
            return await this.taskModel.findById({ _id: id }).exec()
        } catch (error) {
            console.error(error);                           //Если ошибка, выводим в консоль и возвращаем null
            return null
        }
    }

    async create(CreateTaskDto: CreateTaskDto): Promise<TaskDocument>   //Создание задачи
    {
        const createdTask = new this.taskModel(CreateTaskDto);
        return createdTask.save()
    }

    async update(id: string, UpdateTaskDto: UpdateTaskDto)              //Обновление задачи
    {
        await this.taskModel.updateOne({ _id: id}, UpdateTaskDto).exec()
    }

    async delete(id: string)                                            //Удаление задачи
    {
        this.taskModel.deleteOne({_id: id}).exec()
    }
}
