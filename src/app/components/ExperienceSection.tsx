"use client"
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from "@mui/material"
import {
  Work as WorkIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Business as BusinessIcon,
} from "@mui/icons-material"

const experiences = [
  {
    title: "Frontend Developer",
    subtitle: "Posición Actual",
    description: "Desarrollo de interfaces de usuario modernas y responsivas utilizando las últimas tecnologías web.",
    icon: <WorkIcon />,
    color: "primary",
  },
  {
    title: "Full Stack Developer",
    subtitle: "Experiencia Previa",
    description: "Desarrollo completo de aplicaciones web, desde el frontend hasta el backend y bases de datos.",
    icon: <SchoolIcon />,
    color: "secondary",
  },
  {
    title: "Aspiración: Prompt Engineer",
    subtitle: "Objetivo Profesional",
    description: "Especialización en Inteligencia Artificial y desarrollo de prompts efectivos para modelos de IA.",
    icon: <TrendingUpIcon />,
    color: "success",
  },
  {
    title: "Emprendimiento",
    subtitle: "Meta Personal",
    description: "Crear mi propia empresa de tecnología enfocada en soluciones innovadoras con IA.",
    icon: <BusinessIcon />,
    color: "warning",
  },
]

const timelineSteps = [
  {
    title: "Formación en Ingeniería de Software",
    description: "Base sólida en programación y desarrollo",
    icon: <SchoolIcon />,
    color: "#1976d2",
  },
  {
    title: "Experiencia Full Stack",
    description: "Desarrollo completo de aplicaciones web",
    icon: <WorkIcon />,
    color: "#dc004e",
  },
  {
    title: "Especialización Frontend",
    description: "Enfoque actual en interfaces de usuario",
    icon: <TrendingUpIcon />,
    color: "#2e7d32",
  },
  {
    title: "Futuro en IA & Emprendimiento",
    description: "Prompt Engineering y empresa propia",
    icon: <BusinessIcon />,
    color: "#ed6c02",
  },
]

function ExperienceCard({ experience, index }: { experience: any; index: number }) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardContent sx={{ p: 3, textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Box
            sx={{
              p: 2,
              borderRadius: "50%",
              backgroundColor: `${experience.color}.main`,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {experience.icon}
          </Box>
        </Box>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          {experience.title}
        </Typography>
        <Typography variant="subtitle2" color="primary" sx={{ mb: 2 }}>
          {experience.subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {experience.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

function CustomTimelineItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  return (
    <Box sx={{ display: "flex", mb: 4 }}>
      {/* Timeline dot and line */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mr: 3 }}>
        <Avatar
          sx={{
            width: 50,
            height: 50,
            backgroundColor: step.color,
            mb: 1,
          }}
        >
          {step.icon}
        </Avatar>
        {!isLast && (
          <Box
            sx={{
              width: 2,
              height: 60,
              backgroundColor: "divider",
              opacity: 0.5,
            }}
          />
        )}
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, pt: 1 }}>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          {step.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {step.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default function ExperienceSection() {
  return (
    <Box id="experience" sx={{ py: 8, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            background: "linear-gradient(45deg, #1976d2, #9c27b0)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experiencia & Objetivos
        </Typography>

        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ExperienceCard experience={experience} index={index} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" sx={{ mb: 6, color: "primary.main" }}>
            Mi Trayectoria Profesional
          </Typography>

          <Box sx={{ maxWidth: 600, mx: "auto" }}>
            {timelineSteps.map((step, index) => (
              <CustomTimelineItem key={index} step={step} index={index} isLast={index === timelineSteps.length - 1} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
