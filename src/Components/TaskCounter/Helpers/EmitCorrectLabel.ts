import { TaskCOunterStatusType } from "../Interfaces/ITaskCounter"
import { Status } from "../../CreateTaskForm/enums/Status"


export const emitCorrectLabel = (status: TaskCOunterStatusType): string => {
switch (status) {
    case Status.todo:
        return "To Do"
    case Status.inProgress:
        return "In Progress"
    case Status.completed:
        return "Completed"
        
}
}