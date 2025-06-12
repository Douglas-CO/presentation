"use client"
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from "@mui/material"
import {
  Favorite as FavoriteIcon,
  Work as WorkIcon,
  Handshake as HandshakeIcon,
  QuestionAnswer as QuestionIcon,
  Group as GroupIcon,
  Person as PersonIcon,
} from "@mui/icons-material"

const personalityTraits = [
  {
    title: "Amable",
    description: "Trato cordial y empático con colegas y clientes",
    icon: <FavoriteIcon />,
    color: "#e91e63",
  },
  {
    title: "Trabajador",
    description: "Dedicación y compromiso en cada proyecto",
    icon: <WorkIcon />,
    color: "#2196f3",
  },
  {
    title: "Respetuoso",
    description: "Valoración y consideración hacia todos los miembros del equipo",
    icon: <HandshakeIcon />,
    color: "#4caf50",
  },
  {
    title: "Curioso",
    description: "Siempre hago preguntas para buscar el mejor rendimiento",
    icon: <QuestionIcon />,
    color: "#ff9800",
  },
  {
    title: "Trabajo en Equipo",
    description: "Excelente colaboración y comunicación grupal",
    icon: <GroupIcon />,
    color: "#9c27b0",
  },
  {
    title: "Independiente",
    description: "Capacidad de trabajar de forma autónoma y eficiente",
    icon: <PersonIcon />,
    color: "#607d8b",
  },
]

function PersonalityCard({ trait, index }: { trait: any; index: number }) {
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
        <Avatar
          sx={{
            width: 60,
            height: 60,
            backgroundColor: trait.color,
            margin: "0 auto 16px auto",
          }}
        >
          {trait.icon}
        </Avatar>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {trait.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {trait.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default function PersonalitySection() {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            background: "linear-gradient(45deg, #1976d2, #9c27b0)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sobre Mí
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{
            mb: 6,
            color: "text.secondary",
            maxWidth: 800,
            margin: "0 auto 48px auto",
            lineHeight: 1.6,
          }}
        >
          Mi personalidad y valores que me definen como profesional
        </Typography>

        <Grid container spacing={4}>
          {personalityTraits.map((trait, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PersonalityCard trait={trait} index={index} />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: "background.paper",
            borderRadius: 4,
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, color: "primary.main" }}>
            Mi Filosofía de Trabajo
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.8,
              color: "text.secondary",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            Creo firmemente que el éxito en el desarrollo de software viene de la combinación entre habilidades técnicas
            sólidas y una actitud colaborativa. Mi enfoque siempre es hacer las preguntas correctas para entender
            completamente los requisitos y entregar soluciones que superen las expectativas.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
