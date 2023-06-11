import {FC, ReactElement} from "react";
import {TextField} from "@mui/material";
import { ITextfield } from "./Interfaces/ITextfield";
import { PropTypes } from 'prop-types'


export const TaskDescriptionField: FC<ITextfield> = (props,): ReactElement => {
 //destructure props
 const { 
    onChange = (e) => console.log(e), 
    disabled = false } = props;// by adding these it because mandatory to pass these props to the component since they have the ITextfield interface

    return(
        <TextField
        id="description"
        name="description"
        label="Description"
        placeholder="Description"
        variant="outlined"
        size="small"
        multiline // allows for multiple lines of text
        rows={4} // sets the number of rows for the multiline text field
        fullWidth // sets the width of the text field to 100%
        onChange={onChange} // these props come from the ITextfield interface
        disabled={disabled} // these props come from the ITextfield interface
        />
    )
}

TaskDescriptionField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};