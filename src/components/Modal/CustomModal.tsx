'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography
} from '@mui/material';

interface CustomModalProps {
  isOpen: boolean;
  title: string;
  labelCancel: string;
  labelConfirm?: string;
  onCancel: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode | (() => React.ReactNode);

  // nuevo
  backgroundColor?: string; // ejemplo: "primary.main", "text.secondary"
}

// convierte "primary.main" → theme.palette.primary.main
const resolveMuiColor = (theme: any, path?: string) => {
  if (!path) return undefined;

  const [section, tone] = path.split(".");

  const segment = theme.palette[section];
  if (!segment) return undefined;

  const finalColor = segment[tone];
  return finalColor;
};

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  title,
  labelCancel,
  labelConfirm,
  onCancel,
  onConfirm,
  children,
  backgroundColor = "background.paper",
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onCancel}
      aria-labelledby="custom-modal-title"
      PaperProps={{
        sx: (theme) => ({
          backgroundColor: resolveMuiColor(theme, backgroundColor) ?? theme.palette.background.paper,
          borderRadius: "16px",
          padding: 0,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          maxWidth: 500,
          width: "90vw",
        }),
      }}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          animation: "fadeIn 0.3s ease-out",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          padding: "32px 24px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Typography
          id="custom-modal-title"
          sx={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 600,
            color: "black",
            letterSpacing: "-0.5px",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Content */}
      <DialogContent
        sx={{
          padding: "24px",
          color: "black",
          fontSize: "16px",
          lineHeight: 1.5,
        }}
      >
        {typeof children === "function" ? children() : children}
      </DialogContent>

      {/* Footer */}
      <DialogActions
        sx={{
          padding: "16px 24px 24px",
          display: "flex",
          gap: "12px",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <Button
          onClick={onCancel}
          sx={{
            padding: "10px 24px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 500,
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "black",
            border: "1px solid rgba(255,255,255,0.3)",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
              borderColor: "rgba(255,255,255,0.5)",
              transform: "translateY(-2px)",
            },
          }}
        >
          {labelCancel}
        </Button>

        {labelConfirm && onConfirm && (
          <Button
            onClick={onConfirm}
            sx={{
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              color: "black",
              textTransform: "none",
              backgroundColor: "rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.4)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.3)",
                transform: "translateY(-2px)",
              },
            }}
          >
            {labelConfirm}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
