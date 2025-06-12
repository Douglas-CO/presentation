"use client"
import { Box, Container, Typography, Grid, Button, TextField } from "@mui/material"
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material"

export default function ContactSection() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "background.paper",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(45deg, transparent 0%, rgba(0,255,255,0.05) 50%, transparent 100%),
            linear-gradient(-45deg, transparent 0%, rgba(255,0,128,0.05) 50%, transparent 100%)
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
          CONTACT.EXE
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
          {">"} Estableciendo conexión...
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                border: "2px solid",
                borderColor: "primary.main",
                backgroundColor: "rgba(0,0,0,0.5)",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontFamily: '"Orbitron", monospace',
                  color: "secondary.main",
                  letterSpacing: "0.1em",
                }}
              >
                CONNECT_WITH_ME
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  sx={{
                    justifyContent: "flex-start",
                    borderColor: "primary.main",
                    color: "primary.main",
                    fontFamily: '"Roboto Mono", monospace',
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "background.default",
                      boxShadow: `0 0 20px primary.main`,
                    },
                  }}
                >
                  douglas.coronado@email.com
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    justifyContent: "flex-start",
                    borderColor: "secondary.main",
                    color: "secondary.main",
                    fontFamily: '"Roboto Mono", monospace',
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      color: "background.default",
                      boxShadow: `0 0 20px secondary.main`,
                    },
                  }}
                >
                  LinkedIn - Douglas Coronado
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<GitHubIcon />}
                  sx={{
                    justifyContent: "flex-start",
                    borderColor: "primary.main",
                    color: "primary.main",
                    fontFamily: '"Roboto Mono", monospace',
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "background.default",
                      boxShadow: `0 0 20px primary.main`,
                    },
                  }}
                >
                  GitHub - @douglascoronado
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    justifyContent: "flex-start",
                    borderColor: "secondary.main",
                    color: "secondary.main",
                    fontFamily: '"Roboto Mono", monospace',
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      color: "background.default",
                      boxShadow: `0 0 20px secondary.main`,
                    },
                  }}
                >
                  WhatsApp - Contacto Directo
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                border: "2px solid",
                borderColor: "secondary.main",
                backgroundColor: "rgba(0,0,0,0.5)",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontFamily: '"Orbitron", monospace',
                  color: "primary.main",
                  letterSpacing: "0.1em",
                }}
              >
                SEND_MESSAGE
              </Typography>

              <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                  label="NAME"
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: '"Roboto Mono", monospace',
                      "& fieldset": {
                        borderColor: "primary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "primary.main",
                      fontFamily: '"Orbitron", monospace',
                    },
                  }}
                />

                <TextField
                  label="EMAIL"
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: '"Roboto Mono", monospace',
                      "& fieldset": {
                        borderColor: "primary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "primary.main",
                      fontFamily: '"Orbitron", monospace',
                    },
                  }}
                />

                <TextField
                  label="MESSAGE"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontFamily: '"Roboto Mono", monospace',
                      "& fieldset": {
                        borderColor: "primary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "primary.main",
                      fontFamily: '"Orbitron", monospace',
                    },
                  }}
                />

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "background.default",
                    fontFamily: '"Orbitron", monospace',
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                      boxShadow: `0 0 20px secondary.main`,
                    },
                  }}
                >
                  TRANSMIT_MESSAGE
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Terminal footer */}
        <Box
          sx={{
            mt: 8,
            p: 3,
            backgroundColor: "rgba(0,0,0,0.8)",
            border: "1px solid",
            borderColor: "primary.main",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              fontFamily: '"Roboto Mono", monospace',
              mb: 1,
            }}
          >
            © 2024 DOUGLAS_CORONADO.EXE - ALL_RIGHTS_RESERVED
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontFamily: '"Roboto Mono", monospace',
            }}
          >
            POWERED_BY: MATERIAL_UI + NEXT.JS + PASSION
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
