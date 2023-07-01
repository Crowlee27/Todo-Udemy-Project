import { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { ITaskCounter } from "./Interfaces/ITaskCounter";
import { Status } from "../CreateTaskForm/enums/Status";
import { emitCorrectBorderColor } from "./Helpers/EmitCorrectBorderColor";
import { emitCorrectLabel } from "./Helpers/EmitCorrectLabel";

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  //destructure props
  const { status = Status.completed, count = 0 } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: "transparent",
            border: "5px solid",
            width: "96px",
            height: "96px",
            marginBottom: "16px",
            borderColor: `${emitCorrectBorderColor(status)}`,
          }}
        >
          <Typography color="white" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="white"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};


