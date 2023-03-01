import { routeConfig } from "./routes";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AppTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={createTheme(AppTheme)}>
      <RouterProvider router={routeConfig} />
    </ThemeProvider>
  );
}

export default App;
