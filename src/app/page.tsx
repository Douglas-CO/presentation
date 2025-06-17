/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import VisionSection from "./components/VisionSection";
import ConnectSection from "./components/ConnectSection";
import ExpertiseSection from "./components/ExpertiseSection";

export type PageProps = {
  isMobile: boolean;
};

const Page: React.FC<PageProps> = ({ isMobile }) => {
  const { theme, currentTheme, changeTheme } = useTheme();
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
        <Header
          currentTheme={currentTheme}
          onThemeChange={changeTheme}
          isMobile={isMobile}
        />
        <HeroSection isMobile={isMobile} />
        <AboutSection isMobile={isMobile} />
        <ExpertiseSection isMobile={isMobile} />
        <VisionSection isMobile={isMobile} />
        <ConnectSection />
      </Box>
    </ThemeProvider>
  );
};

export default Page;
