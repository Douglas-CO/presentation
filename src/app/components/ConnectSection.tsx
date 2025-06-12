"use client"
import { Box, Container, Typography, Grid, Button, TextField, Card } from "@mui/material"
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  WhatsApp as WhatsAppIcon,
  Send as SendIcon,
} from "@mui/icons-material"

const contactMethods = [
  {
    icon: <EmailIcon />,
    title: "Email",
    value: "douglas.coronado@email.com",
    description: "Para oportunidades profesionales",
  },
  {
    icon: <LinkedInIcon />,
    title: "LinkedIn",
    value: "Douglas Coronado",
    description: "Conectemos profesionalmente",
  },
  {
    icon: <GitHubIcon />,
    title: "GitHub",
    value: "@douglascoronado",
    description: "Revisa mis proyectos",
  },
  {
    icon: <WhatsAppIcon />,
    title: "WhatsApp",
    value: "Contacto directo",
    description: "Para conversaciones rápidas",
  },
]

export default function ConnectSection() {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: "background.default",
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
            Let's Connect
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Estoy siempre abierto a nuevas oportunidades, colaboraciones interesantes y conversaciones sobre tecnología
            e innovación.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                height: "100%",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  color: "primary.main",
                  fontWeight: 500,
                }}
              >
                Get in Touch
              </Typography>

              <Grid container spacing={3}>
                {contactMethods.map((method, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        p: 3,
                        backgroundColor: "background.paper",
                        borderRadius: 2,
                        border: "1px solid rgba(0,0,0,0.06)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        cursor: "pointer",
                        "&:hover": {
                          borderColor: "primary.main",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            p: 1,
                            borderRadius: "50%",
                            backgroundColor: "primary.main",
                            color: "white",
                            mr: 2,
                          }}
                        >
                          {method.icon}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {method.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "primary.main",
                          fontWeight: 500,
                          mb: 1,
                        }}
                      >
                        {method.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.9rem",
                        }}
                      >
                        {method.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                height: "100%",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  color: "primary.main",
                  fontWeight: 500,
                }}
              >
                Send Message
              </Typography>

              <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />

                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />

                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />

                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    mt: 2,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 6,
            borderTop: "1px solid rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 1,
            }}
          >
            © 2024 Douglas Matias Coronado Ortiz. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "0.9rem",
            }}
          >
            Crafted with passion using Material UI & Next.js
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
