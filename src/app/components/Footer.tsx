"use client"
import { Box, Container, Typography, Grid, Button, Divider } from "@mui/material"
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        py: 6,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                animation: "fadeInUp 1s ease-out",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                ¡Conectemos!
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
                Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme para discutir
                proyectos o simplemente para conectar.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon color="primary" />
                  <Typography variant="body2">douglas.coronado@email.com</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon color="primary" />
                  <Typography variant="body2">+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationIcon color="primary" />
                  <Typography variant="body2">Disponible para trabajo remoto</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                animation: "fadeInUp 1s ease-out 0.3s both",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Sígueme en Redes
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Button variant="outlined" startIcon={<LinkedInIcon />} sx={{ justifyContent: "flex-start" }}>
                  LinkedIn - Douglas Coronado
                </Button>
                <Button variant="outlined" startIcon={<GitHubIcon />} sx={{ justifyContent: "flex-start" }}>
                  GitHub - @douglascoronado
                </Button>
                <Button variant="outlined" startIcon={<WhatsAppIcon />} sx={{ justifyContent: "flex-start" }}>
                  WhatsApp - Contacto Directo
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            textAlign: "center",
            animation: "fadeIn 1s ease-out 0.6s both",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2024 Douglas Matias Coronado Ortiz. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Desarrollado con ❤️ usando Material UI y Next.js
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
