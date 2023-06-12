import { Status } from "../../CreateTaskForm/enums/Status";
import { TaskCOunterStatusType } from "../Interfaces/ITaskCounter";

export const emitCorrectBorderColor = (
  status: TaskCOunterStatusType
): string => {
  switch (status) {
    case Status.todo:
      return "error.light";
    case Status.inProgress:
      return "warning.light";
    case Status.completed:
      return "success.light";
  }
};
