// components/CustomBoxMoveEnd.tsx
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles"; // usar el hook correcto
import { useSpring, animated } from "@react-spring/web";

export interface CustomBoxMoveEndProps<T> {
  width: number;
  height: number;
  cmToPx: number;
  widthEnd?: number; // margen derecho en % (0.01 = 1%)
  row?: T; // dato opcional para pasar a CampShow
  CampShow: (row?: T) => React.ReactNode;
  bgColor?: string;
  timeMove?: number;
  color?: string;
}

function CustomBoxMoveEnd<T>({
  width,
  height,
  cmToPx,
  widthEnd = 0.01,
  row,
  CampShow,
  bgColor,
  color,
  timeMove = 1500,
}: CustomBoxMoveEndProps<T>) {
  const theme = useTheme();
  const [targetLeft, setTargetLeft] = useState(0);

  const boxWidthPx = width * cmToPx;

  const calculateTargetLeft = () => {
    const screenWidth = window.innerWidth;
    const marginRight = screenWidth * widthEnd;
    return screenWidth - boxWidthPx - marginRight;
  };

  useEffect(() => {
    const handleResize = () => {
      setTargetLeft(calculateTargetLeft());
    };

    setTargetLeft(calculateTargetLeft());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [boxWidthPx, widthEnd]);

  const springs = useSpring({
    from: { left: -boxWidthPx },
    to: { left: targetLeft },
    config: { duration: timeMove },
  });

  return (
    <animated.div
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: `${width}cm`,
        height: `${height}cm`,
        backgroundColor: bgColor ?? theme.palette.primary.main, // usa el color por defecto si no se pasa uno
        borderRadius: 8,
        color: color ?? theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        zIndex: 9999,
        pointerEvents: "auto",
        ...springs,
      }}
    >
      <Grid sx={{ m: "5px", width: "100%" }}>{CampShow(row)}</Grid>
    </animated.div>
  );
}

export default CustomBoxMoveEnd;
