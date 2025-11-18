"use client";
import {
  Box,
  Grid,
  Chip,
  useTheme,
  Container,
  Typography,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skillSets = [
  {
    category: "Lenguajes Dominados",
    skills: [
      { name: "JavaScript", level: 100 },
      { name: "TypeScript", level: 100 },
      { name: "Python", level: 90 },
      { name: "PHP", level: 85 },
    ],
  },
  {
    category: "Languajes con conocimiento",
    skills: [
      { name: "Java", level: 70 },
      { name: "C#", level: 65 },
    ],
  },
  {
    category: "Bases de datos",
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "MySQL", level: 90 },
      { name: "Firebase", level: 90 },
      { name: "MongoDB", level: 70 },
    ],
  },
];

const technologies = [
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express",
  "Material UI",
  "Tailwind CSS",
  "Git",
];

export type ExpertiseSectionProps = {
  isMobile: boolean;
};

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(skillSets.length - 1, prev + 1));
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === skillSets.length - 1;

  return (
    <Box
      id="expertise"
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
            Experiencia
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
            Una combinación sólida de lenguajes de programación, bases de datos
            y tecnologías modernas que me permiten crear soluciones completas y
            escalables.
          </Typography>
        </Box>

        {isMobile ? (
          <Grid container spacing={6} sx={{ mb: 8 }}>
            {skillSets.map((skillSet, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: "background.paper",
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.06)",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 4,
                      color: "primary.main",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {skillSet.category}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {skillSet.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, color: "text.primary" }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: "rgba(0,0,0,0.06)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 3,
                              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              width: "100%",
              maxWidth: 500,
              mx: "auto",
              position: "relative",
            }}
          >
            {/* Contenedor del carousel */}
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: 3,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {skillSets.map((skillSet, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: "100%",
                      px: 1,
                    }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        backgroundColor: "background.paper",
                        borderRadius: 3,
                        border: "1px solid rgba(0,0,0,0.06)",
                        minHeight: 320,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          borderColor: "primary.main",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 4,
                          color: "primary.main",
                          fontWeight: 600,
                          textAlign: "center",
                        }}
                      >
                        {skillSet.category}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 3,
                        }}
                      >
                        {skillSet.skills.map((skill, skillIndex) => (
                          <Box key={skillIndex}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 1,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, color: "text.primary" }}
                              >
                                {skill.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                              >
                                {skill.level}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: "rgba(0,0,0,0.06)",
                                "& .MuiLinearProgress-bar": {
                                  borderRadius: 3,
                                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                },
                              }}
                            />
                          </Box>
                        ))}
                      </Box>
                    </Box>
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
                  backgroundColor: isFirstSlide ? "grey.100" : "primary.main",
                  color: isFirstSlide ? "grey.400" : "white",
                  "&:hover": {
                    backgroundColor: isFirstSlide ? "grey.100" : "primary.dark",
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
                {skillSets.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        index === currentIndex ? "primary.main" : "grey.300",
                      transition: "background-color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </Box>

              <IconButton
                onClick={handleNext}
                disabled={isLastSlide}
                sx={{
                  backgroundColor: isLastSlide ? "grey.100" : "primary.main",
                  color: isLastSlide ? "grey.400" : "white",
                  "&:hover": {
                    backgroundColor: isLastSlide ? "grey.100" : "primary.dark",
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
        )}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              mt: 5,
              color: "primary.main",
              fontWeight: 400,
            }}
          >
            Tecnologia & Herramientas
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                sx={{
                  px: 2,
                  py: 1,
                  fontSize: "1rem",
                  fontWeight: 500,
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExpertiseSection;
