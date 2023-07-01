import {FC,ReactElement} from "react";
import {Box ,Typography} from "@mui/material";
import { ITaskDescription } from "./Interfaces/ITaskDescription";


export const TaskDescription: FC<ITaskDescription> = (props,): ReactElement => {
//destructuring props

const {description = "Default Description"} = props;

    return <Box>
        <Typography>{description}</Typography>
    </Box>
}

