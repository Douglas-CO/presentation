"use client";

import type React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { Palette as PaletteIcon } from "@mui/icons-material";
import type { ThemeMode } from "../hooks/useTheme";

export type HeaderProps = {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  isMobile: boolean;
};

const Header: React.FC<HeaderProps> = ({
  currentTheme,
  onThemeChange,
  isMobile,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleThemeMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleThemeMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme: ThemeMode) => {
    onThemeChange(theme);
    handleThemeMenuClose();
  };

  const themeOptions = [
    { value: "minimal", label: "Minimal", color: "#000000" },
    { value: "luxury", label: "Luxury", color: "#d4af37" },
    { value: "nature", label: "Nature", color: "#2d5016" },
    { value: "monochrome", label: "Monochrome", color: "#1a1a1a" },
    { value: "warm", label: "Warm", color: "#d97706" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            animation: "fadeInLeft 1s ease-out",
            "@keyframes fadeInLeft": {
              "0%": { opacity: 0, transform: "translateX(-20px)" },
              "100%": { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              mr: 2,
              backgroundColor: "primary.main",
              color: "white",
              fontSize: "1.2rem",
              fontWeight: 600,
            }}
          >
            D
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "primary.main",
              letterSpacing: "-0.01em",
            }}
          >
            DOUGLAS CORONADO
          </Typography>
        </Box>
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              animation: "fadeInRight 1s ease-out",
              "@keyframes fadeInRight": {
                "0%": { opacity: 0, transform: "translateX(20px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            <Button
              color="inherit"
              href="#about"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              ACERCA
            </Button>
            <Button
              color="inherit"
              href="#expertise"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              EXPERIENCIA
            </Button>
            <Button
              color="inherit"
              href="#vision"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              VISION
            </Button>
            <IconButton
              onClick={handleThemeMenuOpen}
              sx={{
                ml: 1,
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              <PaletteIcon />
            </IconButton>
          </Box>
        ) : null}

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleThemeMenuClose}
          PaperProps={{
            sx: {
              boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0,0,0,0.06)",
              mt: 1,
            },
          }}
        >
          {themeOptions.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => handleThemeChange(option.value as ThemeMode)}
              selected={currentTheme === option.value}
              sx={{
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: option.color,
                  mr: 2,
                }}
              />
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
