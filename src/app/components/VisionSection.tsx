"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import {
  Code as CodeIcon,
  Psychology as AIIcon,
  Business as BusinessIcon,
} from "@mui/icons-material";

const roadmap = [
  {
    phase: "Presente",
    title: "Fullstack Developer",
    description: "Creador en interfaces de usuario con las últimas tecnologías",
    icon: <CodeIcon />,
    status: "active",
  },
  {
    phase: "Proximo",
    title: "Prompt Engineer & Big Data",
    description:
      "Transicionando hacia la especialización en IA y desarrollo de prompts efectivos con propfundidad de lectura de datos matematicos",
    icon: <AIIcon />,
    status: "planned",
  },
  {
    phase: "Largo plazo",
    title: "CyberSegurity & Empresa",
    description:
      "Estableciendo mi propia empresa tecnológica con enfoque en soluciones innovadoras y proteccion informacion empresarial",
    icon: <BusinessIcon />,
    status: "vision",
  },
];

export default function VisionSection() {
  return (
    <Box
      id="vision"
      sx={{
        py: 12,
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: "primary.main",
              fontWeight: 300,
            }}
          >
            Visión Profesional
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Mi trayectoria profesional está diseñada con propósito: desde la
            especialización técnica actual hacia el liderazgo empresarial en el
            futuro de la tecnología.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {roadmap.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  border:
                    item.status === "active"
                      ? "2px solid"
                      : "1px solid rgba(0,0,0,0.06)",
                  borderColor:
                    item.status === "active"
                      ? "primary.main"
                      : "rgba(0,0,0,0.06)",
                  backgroundColor:
                    item.status === "active"
                      ? "primary.main"
                      : "background.paper",
                  color: item.status === "active" ? "white" : "text.primary",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      opacity: 0.8,
                    }}
                  >
                    {item.phase}
                  </Typography>

                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mx: "auto",
                      mb: 3,
                      backgroundColor:
                        item.status === "active" ? "white" : "primary.main",
                      color:
                        item.status === "active" ? "primary.main" : "white",
                    }}
                  >
                    {item.icon}
                  </Avatar>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.6,
                      opacity: 0.9,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 6,
            backgroundColor: "background.default",
            borderRadius: 4,
            textAlign: "center",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: "1.125rem",
            }}
          >
            Creo que el futuro de la tecnología está en la intersección entre la
            experiencia técnica sólida y la capacidad de liderar equipos hacia
            la innovación. Mi camino desde el desarrollo Full Stack hacia el
            Prompt Engineering y el emprendimiento me permitirá contribuir
            significativamente a esta evolución.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
