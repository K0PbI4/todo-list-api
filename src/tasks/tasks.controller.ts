import 
{   Controller, Get, Post, Put,
    Delete, Param, Body, UsePipes,
    ValidationPipe  } 
from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dtos/create-task.dto';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';

@Controller('tasks')
export class TasksController 
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
    @UsePipes(new ValidationPipe())
    async store(@Body() CreateTaskDto: CreateTaskDto)
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
