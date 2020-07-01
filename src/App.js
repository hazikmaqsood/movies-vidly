import React from 'react';
import Movie from './component/Movie';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
        <Container maxWidth="md">

      <h1> Hello World</h1>
      <Movie />
      </Container>
    </div>
  );
}

export default App;
