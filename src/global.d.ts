export {};

declare global {
   interface IDisabled {
    disabled?: boolean; //this is to disable the input field
  }

   interface ITextfield extends IDisabled {
    onChange?: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  } // this is to set the onChange event for the input field and disable the input field since it extends IDisabled
  
   interface IDatefield extends IDisabled {
    value?: Date | null;
    onChange?: (date: Date | null) => void;
  }
  
   interface ISelectItems{
    value: string;
    label: string;
}

 interface ISelectField  extends IDisabled {
    name?: string;
    label?: string;
    value?: string;
    onChange?: (e: SelectChangeEvent) => void;
    items?: ISelectItems[];
}

type Status = "Todo" | "In Progress" | "Completed";

type Priority = "High" | "Normal" | "Low";

  

}