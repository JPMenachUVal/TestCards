import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import CardList from './components/CardList';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Contact Cards</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <CardList />
      </Container>
    </>
  );
}

export default App;