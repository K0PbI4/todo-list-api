export class CreateTaskDto 
{
    title: string;          //Заголовок
    description?: string;   //Описание
    completed?: boolean     //Завершённость
}