import { Status } from "../../CreateTaskForm/enums/Status";

export type TaskCOunterStatusType =
  | Status.todo
  | Status.inProgress
  | Status.completed;

export interface ITaskCounter {
  count?: number;
  status?: TaskCOunterStatusType; //this type came from enums/Status.ts
}
