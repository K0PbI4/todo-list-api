import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "./create-task.dto";

//Наследование от частично заполненного CreateTaskDto
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}