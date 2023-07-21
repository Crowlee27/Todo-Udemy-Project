import { Priority } from "../../CreateTaskForm/enums/Priority";
import { Status } from "../../CreateTaskForm/enums/Status";

export interface ITaskApi {
    id: string;
    date: string;
    title: string;
    description: string;
    priority: `${Priority}`;
    status: `${Status}`;
}

//by using the backtick, we can use the enum as a string literal type to make it a union type