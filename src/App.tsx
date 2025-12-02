/* eslint-disable react/react-in-jsx-scope */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRoutes } from "react-router-dom";

import { RTL } from "./layouts";
import { AppRouter } from "./router";
import { useUiStore } from "./store";
import { ThemeSettings } from "./theme";
import { ThemeProvider } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  const routing = useRoutes(AppRouter);
  const theme = ThemeSettings();
  const customizer = useUiStore((state) => state.state);

  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RTL direction={customizer.activeDir}>
            {routing}
            <ToastContainer />
          </RTL>
        </ThemeProvider>
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

export default App;
