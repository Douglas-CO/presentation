"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "../../hooks/useTheme";
import { AboutSection, ConnectSection, ExpertiseSection, Header, HeroSection, VisionSection } from "./child";



export type MainPageProps = {
  isMobile: boolean;
};

const MainPage: React.FC<MainPageProps> = ({ isMobile }) => {
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
        <ConnectSection isMobile={isMobile} />
      </Box>
    </ThemeProvider>
  );
};

export default MainPage;
