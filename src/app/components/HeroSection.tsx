"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import creator from "../img/yo.jpg";

export default function HeroSection() {
  return (
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
                animation: "fadeInUp 1s ease-out",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(40px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background: `linear-gradient(135deg, primary.main 0%, secondary.main 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Douglas Matias
                <br />
                Coronado Ortiz
              </Typography>

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
              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/douglascoronado-d21f5.appspot.com/o/Curriculum%2FCV%20Douglas%20Coronado.pdf?alt=media&token=27d982da-0c7f-4326-b53e-5035cfd4b51d"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<DownloadIcon />}
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      px: 4,
                      py: 2,
                      fontSize: "1.1rem",
                    }}
                  >
                    Download CV
                  </Button>
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
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
        </Grid>
      </Container>
    </Box>
  );
}
