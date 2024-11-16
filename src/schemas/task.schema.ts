import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Структура задачи
export interface ITask 
{
    title: string;
    description?: string;
    completed?: boolean
}

//Схема заадчи для Mongoose
export const TaskSchema = new Schema<ITask>
({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: Boolean
});

//Документ задачи, объединяющий ITask и базовые методы документа Mongoose
export type TaskDocument = mongoose.Document & ITask