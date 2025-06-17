/* eslint-disable react/react-in-jsx-scope */
"use client";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  WhatsApp as WhatsAppIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import { Box, Grid, Card, Container, Typography } from "@mui/material";

const contactMethods = [
  {
    icon: <EmailIcon />,
    title: "Email",
    value: "coronado310701@gmail.com",
    page: false,
  },
  {
    icon: <LinkedInIcon />,
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/douglas-coronado-a84460254/",
    page: true,
  },
  {
    icon: <GitHubIcon />,
    title: "GitHub",
    value: "https://github.com/Douglas-CO",
    page: true,
  },
  {
    icon: <WhatsAppIcon />,
    title: "WhatsApp",
    value: "https://wa.me/593998563068",
    page: true,
  },
];

export default function ConnectSection() {
  const SaveContact = (contact: string, isPage: boolean) => {
    if (isPage) {
      window.open(contact, "_blank", "noopener,noreferrer");
    } else {
      navigator.clipboard
        .writeText(contact)
        .then(() => {
          toast("Email copiado");
        })
        .catch((err) => {
          toast.error("Error al copiar el contacto");
          console.error("Clipboard copy failed:", err);
        });
    }
  };

  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 4,
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
              Contacto
            </Typography>
            <Grid container spacing={2}>
              {contactMethods.map((method, index) => (
                <Grid item xs={6} key={index}>
                  <Box
                    onClick={() => SaveContact(method.value, method.page)}
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
                          mt: 1,
                          mr: 2,
                        }}
                      >
                        {method.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {method.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Card>
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
            Douglas Matias Coronado Ortiz
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
