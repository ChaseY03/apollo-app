import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';

const features = [
  {
    title: "Therapy",
    image: require("../assets/images/therapy.jpg"),
    description: "Access guided therapy tools to support mental health.",
  },
  {
    title: "Journaling",
    image: require("../assets/images/therapy.jpg"),
    description: "Log your thoughts and emotions in a private journal.",
  },
  {
    title: "Anxiety Tracker",
    image: require("../assets/images/therapy.jpg"),
    description: "Rate your anxiety daily and see your progress over time.",
  },
  {
    title: "Anxiety Tracker",
    image: require("../assets/images/therapy.jpg"),
    description: "Rate your anxiety daily and see your progress over time.",
  },
  {
    title: "Anxiety Tracker",
    image: require("../assets/images/therapy.jpg"),
    description: "Rate your anxiety daily and see your progress over time.",
  },
]

const Features = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        App Features
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={feature.image}
                alt={feature.title}
                sx={{ height: 160, objectFit: "cover"}}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Features