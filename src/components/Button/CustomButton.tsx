import { ColorMUI } from "@/constant";
import { Button, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export type CustomButtonProps = {
  icon?: ReactNode;
  onClick?: () => void;
  label: string;
  size?: "large" | "medium" | "small";
  variant?: "contained" | "outlined" | "text";
  sx?: SxProps<Theme>;
  color?: ColorMUI;
  href?: string;
  disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  onClick,
  label,
  size = "medium",
  variant = "contained",
  sx,
  color,
  href,
  disabled = false,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      startIcon={icon}
      onClick={onClick}
      sx={sx}
      color={color}
      href={href}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
