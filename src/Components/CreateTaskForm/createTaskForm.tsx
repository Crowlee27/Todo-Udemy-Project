import { FC, ReactElement, useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./_taskSelectField";
import { Priority } from "./enums/Priority";
import { Status } from "./enums/Status";
import { useMutation } from "@tanstack/react-query";
import { sendApiRequests } from "../../Helpers/sendApiRequests";
import { ICreateTask } from "../TaskArea/interfaces/ICreateTask";
import { TaskStatusChangedContext } from "../../Context";

export const CreateTaskForm: FC = (): ReactElement => {
  //declare states
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const tasksUpdatedContext = useContext(TaskStatusChangedContext);

  //create task mutation
  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequests("http://localhost:3200/Tasks", "POST", data)
  );

  function createTaskHandler() {
    if (!title || !description || !date) {
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    createTaskMutation.mutate(task);
  }

  //manage side effects inside the application
  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
      tasksUpdatedContext.toggle();
    }
    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);
    return () => {
      clearTimeout(successTimeout);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert severity="success" sx={{ width: "100%", marginBottom: "16px" }}>
          <AlertTitle>Success</AlertTitle>
          The Task has been created successfully
        </Alert>
      )}

      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>

      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDateField
          value={date}
          onChange={(date) => setDate(date)}
          disabled={createTaskMutation.isLoading}
        />
        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <TaskSelectField
            label="Status"
            name="Status"
            value={status}
            disabled={createTaskMutation.isLoading}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.todo, // these values come from the enum
                label: Status.todo,
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
            value={priority}
            disabled={createTaskMutation.isLoading}
            onChange={(e) => setPriority(e.target.value as string)}
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
        {createTaskMutation.isLoading && <LinearProgress />}

        <Button
          disabled={!title || !description || !date || !status || !priority}
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
