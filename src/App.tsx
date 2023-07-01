import { ThemeProvider, CssBaseline } from "@mui/material";
import { customTheme } from "./theme/customTheme";
import { FC, ReactElement } from "react";
import { Dashboard } from "./Pages/Dashboard/dashboard";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



//create a query client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
