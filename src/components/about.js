import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      {/* Our Aim */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Aim
        </Typography>
        <Typography variant="body1" paragraph>
          Apollo is a multi-platform application designed to monitor and support a person's well-being,
          specifically targeting anxiety. Using a simple 1–5 scale, users can regularly log their emotional state.
          The app offers coping strategies and a personal journaling system, with the option to share this data
          securely with doctors, counselors, or trusted individuals—with your consent.
        </Typography>
      </Box>

      {/* The Idea */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          The Idea
        </Typography>
        <Typography variant="body1" paragraph>
          The core of Apollo is built for Android and WearOS devices, enabling discreet tracking directly
          from a smartwatch. Our goal is to empower users to better understand, manage, and reduce anxiety
          in their everyday lives.
        </Typography>
      </Box>

      {/* Why We're Building Apollo */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Why We're Building Apollo
        </Typography>
        <Typography variant="body1" paragraph>
            This initiative is deeply personal. Members of our team, and their loved ones, have faced challenges
          with mental health—often without the support they needed. Apollo is our way of transforming those
          experiences into a meaningful tool that helps others feel seen, supported, and understood.
        </Typography>
      </Box>

      {/* The Name "Apollo" */}
      <Box>
        <Typography variant="h4" gutterBottom>
          The Name "Apollo"
        </Typography>
        <Typography variant="body1" paragraph>
          We chose the name “Apollo” because in Greek mythology, Apollo is the god of light and healing, a reflection of our mission to
          bring clarity, care, and positive change to people facing mental health challenges.
          With studies showing that 50% of mental health issues begin by age 14 and 1 in 6 young people
          experience anxiety, we believe even one person helped is a step toward a brighter world.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
