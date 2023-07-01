import { FC, ReactElement } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./_taskSelectField";
import { Priority } from "./enums/Priority";
import { Status } from "./enums/Status";




export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>

      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <TaskSelectField 
            label="Status"
            name="Status"
            items={[
              {
                value: Status.todo, // these values come from the enum
                label: Status.todo
              },
              {
                value: Status.inProgress,
                label: Status.inProgress,
              },
            ]}
            
          />
          <TaskSelectField 
            label="Priority"
            name="Priority"
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
            
          />
        </Stack>
      </Stack>

      {/* {task submit button} */}
    </Box>
  );
};
