"use client"
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"
import {
  Favorite as HeartIcon,
  Group as TeamIcon,
  QuestionAnswer as QuestionIcon,
  TrendingUp as GrowthIcon,
} from "@mui/icons-material"

const values = [
  {
    title: "Empático",
    description: "Trato cordial y comprensivo con cada persona",
    icon: <HeartIcon />,
  },
  {
    title: "Colaborativo",
    description: "Excelencia en trabajo en equipo y comunicación",
    icon: <TeamIcon />,
  },
  {
    title: "Curioso",
    description: "Siempre pregunto para optimizar y mejorar",
    icon: <QuestionIcon />,
  },
  {
    title: "Ambicioso",
    description: "Visión clara hacia el crecimiento profesional",
    icon: <GrowthIcon />,
  },
]

export default function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                color: "primary.main",
                fontWeight: 300,
              }}
            >
              ACERCA DE MI
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "text.secondary",
                lineHeight: 1.8,
              }}
            >
              Soy un profesional apasionado por la tecnología, con una sólida formación en ingeniería de software y
              experiencia práctica en desarrollo Full Stack. Mi enfoque actual está en el Frontend, pero mi visión se
              extiende hacia el futuro de la inteligencia artificial, ciencia de datos y cyberseguridad.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      border: "1px solid rgba(0,0,0,0.06)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        borderColor: "primary.main",
                        boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: "center" }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          p: 2,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          color: "white",
                          mb: 3,
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: "primary.main",
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
