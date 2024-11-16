import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface ITask 
{
    title: string;
    description?: string;
    completed?: boolean
}

export const TaskSchema = new Schema<ITask>
({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: Boolean
});

export type TaskDocument = mongoose.Document & ITask