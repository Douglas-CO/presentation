"use client"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useTheme } from "./hooks/useTheme"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ExpertiseSection from "./components/ExpertiseSection"
import VisionSection from "./components/VisionSection"
import ConnectSection from "./components/ConnectSection"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"

export default function Page() {
  const { theme, currentTheme, changeTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <Header currentTheme={currentTheme} onThemeChange={changeTheme} />
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <VisionSection />
        <ConnectSection />
      </Box>
    </ThemeProvider>
  )
}
