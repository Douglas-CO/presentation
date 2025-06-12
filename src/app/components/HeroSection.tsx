"use client"
import { Box, Container, Typography, Button, Avatar, Grid } from "@mui/material"
import { Download as DownloadIcon, ArrowForward as ArrowForwardIcon } from "@mui/icons-material"

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
                variant="body2"
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 3,
                }}
              >
                Software Engineer
              </Typography>

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
                Transforming ideas into
                <br />
                <Box component="span" sx={{ color: "primary.main", fontWeight: 500 }}>
                  digital experiences
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 6,
                  color: "text.secondary",
                  maxWidth: 500,
                  lineHeight: 1.8,
                }}
              >
                Full Stack Engineer especializado en Frontend, con visión hacia el futuro de la IA como Prompt Engineer
                y aspiraciones empresariales.
              </Typography>

              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
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
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderColor: "primary.main",
                    color: "primary.main",
                    px: 4,
                    py: 2,
                    fontSize: "1.1rem",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  Let's Connect
                </Button>
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
                  src="/placeholder.svg?height=350&width=350"
                  alt="Douglas Matias Coronado Ortiz"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
