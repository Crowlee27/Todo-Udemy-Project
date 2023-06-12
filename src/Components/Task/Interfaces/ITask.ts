import { Priority } from './../../CreateTaskForm/enums/Priority';
import { ITaskHeader } from "./ITaskHeader";
import { ITaskDescription } from "./ITaskDecription";
import { ITaskFooter } from "./ITaskFooter";


export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
    id?: string;
    priority?: string;
    status?: string;
}