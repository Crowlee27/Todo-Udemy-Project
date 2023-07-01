import { FC, ReactElement } from "react";
import { TextField } from "@mui/material";



export const TaskTitleField: FC<ITextfield> = (props): ReactElement => {
  //destructure props
  const { onChange = (e) => console.log(e), disabled = false } = props; // by adding these it because mandatory to pass these props to the component since they have the ITextfield interface
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};


