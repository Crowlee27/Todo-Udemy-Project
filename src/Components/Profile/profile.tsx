import { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import PropTypes  from "prop-types"

interface IProfile{
    name?:string;

}// remove the ? to make it manditory.

export const Profile: FC<IProfile> = (props,): ReactElement => {
    //Destructure props
    const {name = "Cory"} = props
  return (
    <Box // box is a wrapper component
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: "96px",
          height: "96px",
          backgroundColor: "primary.main",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0,1)}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>// typography lets you style the font 
  );
};


Profile.propTypes={ 
    name: PropTypes.string.isRequired,

};// proptypes will throw error on run time, interfaces will just throw error because of typescript but will not throw a runtime error. so something like name should be manditory. so make it a proptype and not just interface.