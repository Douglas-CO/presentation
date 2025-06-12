"use client"
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"
import {
  School as SchoolIcon,
  Work as WorkIcon,
  TrendingUp as TrendingUpIcon,
  Business as BusinessIcon,
} from "@mui/icons-material"

const journeySteps = [
  {
    phase: "PHASE_01",
    title: "SOFTWARE ENGINEERING",
    subtitle: "Foundation",
    description: "Formación sólida en ingeniería de software y programación",
    icon: <SchoolIcon />,
    status: "COMPLETED",
    color: "primary.main",
  },
  {
    phase: "PHASE_02",
    title: "FULL STACK DEVELOPMENT",
    subtitle: "Evolution",
    description: "Experiencia completa en desarrollo frontend y backend",
    icon: <WorkIcon />,
    status: "COMPLETED",
    color: "secondary.main",
  },
  {
    phase: "PHASE_03",
    title: "FRONTEND SPECIALIZATION",
    subtitle: "Current",
    description: "Especialización actual en desarrollo de interfaces de usuario",
    icon: <TrendingUpIcon />,
    status: "ACTIVE",
    color: "primary.main",
  },
  {
    phase: "PHASE_04",
    title: "AI & ENTREPRENEURSHIP",
    subtitle: "Future",
    description: "Prompt Engineering con IA y creación de empresa propia",
    icon: <BusinessIcon />,
    status: "PENDING",
    color: "secondary.main",
  },
]

export default function JourneySection() {
  return (
    <Box
      id="journey"
      sx={{
        py: 10,
        backgroundColor: "background.default",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255,0,128,0.1) 0%, transparent 50%)
          `,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            fontFamily: '"Orbitron", monospace',
            color: "primary.main",
            textShadow: `0 0 20px currentColor`,
            letterSpacing: "0.1em",
          }}
        >
          JOURNEY.EXE
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{
            mb: 8,
            color: "text.secondary",
            fontFamily: '"Roboto Mono", monospace',
            letterSpacing: "0.1em",
          }}
        >
          {">"} Cargando trayectoria profesional...
        </Typography>

        <Grid container spacing={4}>
          {journeySteps.map((step, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "2px solid",
                  borderColor: step.color,
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: `0 0 30px ${step.color}33`,
                  },
                  "&::before": {
                    content: `"${step.phase}"`,
                    position: "absolute",
                    top: -12,
                    left: 20,
                    backgroundColor: "background.default",
                    color: step.color,
                    px: 2,
                    fontFamily: '"Orbitron", monospace',
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        p: 2,
                        border: "2px solid",
                        borderColor: step.color,
                        color: step.color,
                        mr: 3,
                        animation: step.status === "ACTIVE" ? "pulse 2s infinite" : "none",
                        "@keyframes pulse": {
                          "0%, 100%": { boxShadow: `0 0 5px ${step.color}` },
                          "50%": { boxShadow: `0 0 20px ${step.color}` },
                        },
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: '"Orbitron", monospace',
                          fontWeight: 700,
                          color: step.color,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontFamily: '"Roboto Mono", monospace',
                          textTransform: "uppercase",
                        }}
                      >
                        {step.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.primary",
                      fontFamily: '"Roboto Mono", monospace',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {step.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 1,
                      border: "1px solid",
                      borderColor: step.color,
                      backgroundColor: step.status === "ACTIVE" ? step.color : "transparent",
                      color: step.status === "ACTIVE" ? "background.default" : step.color,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: '"Orbitron", monospace',
                        fontWeight: 700,
                        fontSize: "0.8rem",
                      }}
                    >
                      STATUS: {step.status}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
