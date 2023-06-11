import React from "react";
import { IDisabled } from "./IDisabled";

export interface ITextfield extends IDisabled {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
} // this is to set the onChange event for the input field and disable the input field since it extends IDisabled
