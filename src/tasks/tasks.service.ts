import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dtos/create-task.dto';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';
import { TaskDocument } from 'src/schemas/task.schema';

@Injectable()
export class TasksService {
    constructor(
        @InjectModel('Task') private readonly taskModel: Model<TaskDocument>
    ) {}

    async getAll(): Promise<TaskDocument[]> {
        return await this.taskModel.find().exec();
    }

    async findById(id: string): Promise<TaskDocument | null> {
        try {
            return await this.taskModel.findById({ _id: id }).exec();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async create(CreateTaskDto: CreateTaskDto): Promise<TaskDocument> {
        const createdTask = new this.taskModel(CreateTaskDto);
        return createdTask.save();
    }

    async update(id: string, UpdateTaskDto: UpdateTaskDto) {
        await this.taskModel.updateOne({ _id: id}, UpdateTaskDto).exec();
    }

    async delete(id: string) {
        this.taskModel.deleteOne({_id: id}).exec();
    }
}
