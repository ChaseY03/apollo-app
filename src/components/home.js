import React from 'react';

import { Box, Typography, Container, Button } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 12,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Apollo
        </Typography>
        <Typography variant="h6" component="p" paragraph>
          Your journey starts here. Discover Apollo.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Download
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
