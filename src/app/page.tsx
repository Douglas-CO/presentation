"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { MainPage } from "./main";
import { useTheme } from "../hooks/useTheme";


export type PageProps = {
  isMobile: boolean;
};

const Page: React.FC<PageProps> = ({ isMobile }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <MainPage isMobile={isMobile} />
      </Box>
    </ThemeProvider>
  );
};

export default Page;
