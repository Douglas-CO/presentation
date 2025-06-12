"use client"

import { useState, useMemo } from "react"
import { createTheme, type Theme } from "@mui/material/styles"

export type ThemeMode = "minimal" | "luxury" | "nature" | "monochrome" | "warm"

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>("minimal")

  const theme = useMemo(() => {
    const getThemeConfig = (mode: ThemeMode): Theme => {
      const baseTheme = {
        typography: {
          fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", sans-serif',
          h1: {
            fontWeight: 300,
            fontSize: "4.5rem",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
          },
          h2: {
            fontWeight: 300,
            fontSize: "3.5rem",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          },
          h3: {
            fontWeight: 400,
            fontSize: "2.5rem",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          },
          h4: {
            fontWeight: 500,
            fontSize: "2rem",
            lineHeight: 1.4,
          },
          body1: {
            fontSize: "1.125rem",
            lineHeight: 1.7,
            fontWeight: 400,
          },
          body2: {
            fontSize: "1rem",
            lineHeight: 1.6,
            fontWeight: 400,
          },
        },
        shape: {
          borderRadius: 24,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 50,
                padding: "16px 32px",
                fontSize: "1rem",
                fontWeight: 500,
                boxShadow: "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  transform: "translateY(-2px)",
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 24,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
                  transform: "translateY(-4px)",
                },
              },
            },
          },
        },
      }

      switch (mode) {
        case "minimal":
          return createTheme({
            ...baseTheme,
            palette: {
              mode: "light",
              primary: {
                main: "#000000",
                light: "#333333",
                dark: "#000000",
              },
              secondary: {
                main: "#6366f1",
                light: "#8b5cf6",
                dark: "#4f46e5",
              },
              background: {
                default: "#ffffff",
                paper: "#fafafa",
              },
              text: {
                primary: "#000000",
                secondary: "#666666",
              },
            },
          })
        case "luxury":
          return createTheme({
            ...baseTheme,
            palette: {
              mode: "dark",
              primary: {
                main: "#d4af37",
                light: "#f4d03f",
                dark: "#b7950b",
              },
              secondary: {
                main: "#ffffff",
                light: "#ffffff",
                dark: "#f5f5f5",
              },
              background: {
                default: "#0a0a0a",
                paper: "#1a1a1a",
              },
              text: {
                primary: "#ffffff",
                secondary: "#d4af37",
              },
            },
          })
        case "nature":
          return createTheme({
            ...baseTheme,
            palette: {
              mode: "light",
              primary: {
                main: "#2d5016",
                light: "#4a7c59",
                dark: "#1b3409",
              },
              secondary: {
                main: "#8bc34a",
                light: "#aed581",
                dark: "#689f38",
              },
              background: {
                default: "#f8fdf4",
                paper: "#ffffff",
              },
              text: {
                primary: "#2d5016",
                secondary: "#4a7c59",
              },
            },
          })
        case "monochrome":
          return createTheme({
            ...baseTheme,
            palette: {
              mode: "light",
              primary: {
                main: "#1a1a1a",
                light: "#4a4a4a",
                dark: "#000000",
              },
              secondary: {
                main: "#f5f5f5",
                light: "#ffffff",
                dark: "#e0e0e0",
              },
              background: {
                default: "#ffffff",
                paper: "#f9f9f9",
              },
              text: {
                primary: "#1a1a1a",
                secondary: "#666666",
              },
            },
          })
        case "warm":
          return createTheme({
            ...baseTheme,
            palette: {
              mode: "light",
              primary: {
                main: "#d97706",
                light: "#f59e0b",
                dark: "#b45309",
              },
              secondary: {
                main: "#dc2626",
                light: "#ef4444",
                dark: "#b91c1c",
              },
              background: {
                default: "#fffbeb",
                paper: "#ffffff",
              },
              text: {
                primary: "#1f2937",
                secondary: "#d97706",
              },
            },
          })
        default:
          return createTheme(baseTheme)
      }
    }

    return getThemeConfig(currentTheme)
  }, [currentTheme])

  const changeTheme = (newTheme: ThemeMode) => {
    setCurrentTheme(newTheme)
  }

  return { theme, currentTheme, changeTheme }
}
