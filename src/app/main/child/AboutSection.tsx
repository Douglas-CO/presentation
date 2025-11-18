"use client";
import {
  Box,
  Grid,
  Card,
  Container,
  Typography,
  CardContent,
  IconButton,
} from "@mui/material";
import {
  Group as TeamIcon,
  Favorite as HeartIcon,
  TrendingUp as GrowthIcon,
  QuestionAnswer as QuestionIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type AboutSectionProps = {
  isMobile: boolean;
};

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
];

const AboutSection: React.FC<AboutSectionProps> = ({ isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(values.length - 1, prev + 1));
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === values.length - 1;

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
              Soy un profesional apasionado por la tecnología, con una sólida
              formación en ingeniería de software y experiencia práctica en
              desarrollo Full Stack. Mi enfoque actual está en el Frontend, pero
              mi visión se extiende hacia el futuro de la inteligencia
              artificial, ciencia de datos y cyberseguridad.
            </Typography>
          </Grid>

          {isMobile ? (
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
          ) : (
            <Box sx={{ ml: "2cm" }}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 350,
                  mx: "auto",
                  position: "relative",
                }}
              >
                {/* Contenedor del carousel */}
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    mb: 5,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      transform: `translateX(-${currentIndex * 100}%)`,
                      transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {values.map((value, index) => (
                      <Box
                        key={index}
                        sx={{
                          minWidth: "100%",
                          px: 1,
                        }}
                      >
                        <Card
                          sx={{
                            height: 280,
                            border: "1px solid rgba(0,0,0,0.06)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                              borderColor: "primary.main",
                              boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
                            },
                          }}
                        >
                          <CardContent
                            sx={{
                              p: 3,
                              textAlign: "center",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              sx={{
                                display: "inline-flex",
                                p: 2,
                                borderRadius: "50%",
                                backgroundColor: "primary.main",
                                color: "white",
                                mb: 3,
                                mx: "auto",
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
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Controles de navegación */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    onClick={handlePrevious}
                    disabled={isFirstSlide}
                    sx={{
                      backgroundColor: isFirstSlide
                        ? "grey.100"
                        : "primary.main",
                      color: isFirstSlide ? "grey.400" : "white",
                      "&:hover": {
                        backgroundColor: isFirstSlide
                          ? "grey.100"
                          : "primary.dark",
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "grey.100",
                        color: "grey.400",
                      },
                    }}
                  >
                    <ChevronLeft size={20} />
                  </IconButton>

                  {/* Indicadores de posición */}
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {values.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor:
                            index === currentIndex
                              ? "primary.main"
                              : "grey.300",
                          transition: "background-color 0.3s ease",
                        }}
                      />
                    ))}
                  </Box>

                  <IconButton
                    onClick={handleNext}
                    disabled={isLastSlide}
                    sx={{
                      backgroundColor: isLastSlide
                        ? "grey.100"
                        : "primary.main",
                      color: isLastSlide ? "grey.400" : "white",
                      "&:hover": {
                        backgroundColor: isLastSlide
                          ? "grey.100"
                          : "primary.dark",
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "grey.100",
                        color: "grey.400",
                      },
                    }}
                  >
                    <ChevronRight size={20} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
