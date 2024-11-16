import 
{   Controller, Get, Post, Put,
    Delete, Param, Body, UsePipes,
    ValidationPipe  } 
from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dtos/create-task.dto';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';

@Controller('tasks')            //Определение части маршрута
export class TasksController    //Класс, принимающий запросы для сервиса
{
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    async index()
    {
        return this.tasksService.getAll()
    }

    @Get(':id')
    show(@Param('id') id: string)
    {
        return this.tasksService.findById(id)
    }

    @Post()
    @UsePipes(new ValidationPipe())     //Валидация по DTO
    async add(@Body() CreateTaskDto: CreateTaskDto)
    {
        return await this.tasksService.create(CreateTaskDto)
    }

    @Put(':id')
    async edit(@Param('id') id: string, @Body() UpdateTaskDto: UpdateTaskDto)
    {
        await this.tasksService.update(id, UpdateTaskDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string)
    {
        this.tasksService.delete(id)
    }
}
