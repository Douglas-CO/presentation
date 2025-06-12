"use client"
import { Box, Container, Typography, Grid, LinearProgress, Chip } from "@mui/material"

const skillSets = [
  {
    category: "Primary Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 90 },
      { name: "PHP", level: 85 },
    ],
  },
  {
    category: "Secondary Languages",
    skills: [
      { name: "Java", level: 70 },
      { name: "C#", level: 65 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Firebase", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 80 },
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

export default function ExpertiseSection() {
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
            Technical Expertise
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
            Una combinación sólida de lenguajes de programación, bases de datos y tecnologías modernas que me permiten
            crear soluciones completas y escalables.
          </Typography>
        </Box>

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
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {skillSet.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: "text.primary" }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
                            background: `linear-gradient(90deg, primary.main, secondary.main)`,
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

        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: "primary.main",
              fontWeight: 400,
            }}
          >
            Technologies & Tools
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
  )
}
