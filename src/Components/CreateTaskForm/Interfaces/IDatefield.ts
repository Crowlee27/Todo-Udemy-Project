import { IDisabled } from "./IDisabled";

export interface IDatefield extends IDisabled {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}
