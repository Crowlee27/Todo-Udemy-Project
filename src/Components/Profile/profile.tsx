import { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";

export const Profile: FC = (): ReactElement => {
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
          C
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome, Cory
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>// typography lets you style the font 
  );
};
