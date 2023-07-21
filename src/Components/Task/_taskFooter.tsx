import { FC, ReactElement } from "react";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import { ITaskFooter } from "./Interfaces/ITaskFooter";
import { Status } from "../CreateTaskForm/enums/Status";

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  //destructure props
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e,id)}
            color="warning"
            defaultChecked={status === Status.inProgress}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "white" }}
        onClick={(e) => onClick(e,id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};
