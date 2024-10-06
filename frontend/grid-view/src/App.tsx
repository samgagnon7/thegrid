import React from 'react';
import './App.css';
import Grid from './Grid';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Click the Squares!</h1>
      <Grid />
    </div>
  );
};

export default App;