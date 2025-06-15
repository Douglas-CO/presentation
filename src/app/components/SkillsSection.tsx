"use client"
import { Box, Container, Typography, Grid, LinearProgress, Chip } from "@mui/material"

const skillCategories = [
  {
    title: "CORE LANGUAGES",
    skills: [
      { name: "JavaScript", level: 95, color: "#f7df1e" },
      { name: "TypeScript", level: 90, color: "#3178c6" },
      { name: "Python", level: 90, color: "#3776ab" },
      { name: "PHP", level: 85, color: "#777bb4" },
    ],
  },
  {
    title: "SECONDARY STACK",
    skills: [
      { name: "Java", level: 70, color: "#ed8b00" },
      { name: "C#", level: 65, color: "#239120" },
    ],
  },
  {
    title: "DATABASES",
    skills: [
      { name: "Firebase", level: 90, color: "#ffca28" },
      { name: "MongoDB", level: 85, color: "#47a248" },
      { name: "MySQL", level: 85, color: "#4479a1" },
      { name: "SQL Server", level: 80, color: "#cc2927" },
    ],
  },
]

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Django",
  "Laravel",
  "Material UI",
  "Tailwind CSS",
  "Git",
  "Docker",
  "AWS",
  "Vercel",
]

export default function SkillsSection() {
  return (
    <Box
      id="skills"
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
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              rgba(0,255,255,0.03) 100px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 98px,
              rgba(255,0,128,0.03) 100px
            )
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
          SKILLS.EXE
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
          {">"} Analizando competencias técnicas...
        </Typography>

        <Grid container spacing={6}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={4} key={categoryIndex}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "primary.main",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  height: "100%",
                  position: "relative",
                  "&::before": {
                    content: `"${category.title}"`,
                    position: "absolute",
                    top: -12,
                    left: 20,
                    backgroundColor: "background.paper",
                    color: "primary.main",
                    px: 2,
                    fontFamily: '"Orbitron", monospace',
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  },
                }}
              >
                <Box sx={{ mt: 2 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex} sx={{ mb: 3 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: '"Roboto Mono", monospace',
                            fontWeight: 700,
                            color: "text.primary",
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: '"Roboto Mono", monospace',
                            color: "primary.main",
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          backgroundColor: "rgba(255,255,255,0.1)",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: skill.color,
                            boxShadow: `0 0 10px ${skill.color}`,
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

        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 4,
              fontFamily: '"Orbitron", monospace',
              color: "secondary.main",
              letterSpacing: "0.1em",
            }}
          >
            TECH STACK
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                sx={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "primary.main",
                  border: "1px solid",
                  borderColor: "primary.main",
                  fontFamily: '"Roboto Mono", monospace',
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "background.default",
                    boxShadow: `0 0 15px primary.main`,
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
