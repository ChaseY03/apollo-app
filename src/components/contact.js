import { Container, Typography, TextField, Button } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1">Send us a message</Typography>
      <TextField id="filled-basic" label="Name" variant="filled" />
      <TextField id="filled-basic" label="Email" variant="filled" />
       <TextField
          id="filled-multiline-flexible"
          label="Message"
          multiline
          maxRows={8}
          variant="filled"
        />
         <Button variant="contained" size="large">
          Submit
        </Button>
    </Container>
  );
};

export default Contact;