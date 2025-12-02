import { Box, Container, Typography, Avatar, Grid } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import { CustomButton, CustomModal } from "@/components";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import creator from "./yo.jpg";

export type HeroSectionProps = {
  isMobile: boolean;
};

const HeroSection: React.FC<HeroSectionProps> = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          pt: 10,
          pb: 8,
          background: `
          radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)
        `,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50%",
                  minHeight: 400,
                  animation: "fadeInScale 1.2s ease-out 0.3s both",
                  "@keyframes fadeInScale": {
                    "0%": { opacity: 0, transform: "scale(0.8)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -30,
                      left: -30,
                      right: -30,
                      bottom: -30,
                      background: `linear-gradient(135deg, primary.main, secondary.main)`,
                      borderRadius: "50%",
                      opacity: 0.1,
                      animation: "pulse 3s ease-in-out infinite",
                      "@keyframes pulse": {
                        "0%, 100%": { transform: "scale(1)" },
                        "50%": { transform: "scale(1.05)" },
                      },
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 350,
                      height: 350,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                      border: "8px solid white",
                    }}
                    src={creator}
                    alt="Douglas Matias Coronado Ortiz"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  animation: "fadeInUp 1s ease-out",
                  "@keyframes fadeInUp": {
                    "0%": { opacity: 0, transform: "translateY(40px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    color: "text.secondary",
                    fontWeight: 300,
                    lineHeight: 1.4,
                  }}
                >
                  Douglas Matias Coronado Ortiz
                  <br />
                  <Box
                    component="span"
                    sx={{ color: "primary.main", fontWeight: 500 }}
                  >
                    Desarrollador Fullstack
                  </Box>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: isMobile ? null : "center",
                    gap: 3,
                    flexWrap: "wrap",
                  }}
                >
                  <CustomButton
                    label="Iniciar sesion"
                    size="large"
                    icon={<LoginIcon />}
                    onClick={() => setIsOpen(true)}
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      px: 4,
                      py: 2,
                      fontSize: "1.1rem",
                    }}
                  />
                  <CustomButton
                    label="Descargar CV"
                    size="large"
                    icon={<DownloadIcon />}
                    onClick={() =>
                      window.open(
                        "https://firebasestorage.googleapis.com/v0/b/douglascoronado-d21f5.appspot.com/o/Curriculum%2FDouglas%20Coronado%20CV%202025.pdf?alt=media&token=85ba5cac-2a6a-4b7e-a4d0-49b5f1270e50",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    sx={{
                      backgroundColor: "secondary.main",
                      color: "black",
                      px: 4,
                      py: 2,
                      fontSize: "1.1rem",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
        <CustomModal
          isOpen={isOpen}
          title="Confirmar acción"
          labelCancel="Cancelar"
          labelConfirm="Confirmar"
          onCancel={() => setIsOpen(false)}
          onConfirm={() => {
            alert("¡Confirmado!");
            setIsOpen(false);
          }}
          children={() => {
            return <>¿Estás seguro de que deseas continuar con esta acción?</>;
          }}
        />
    </>
  );
};

export default HeroSection;
