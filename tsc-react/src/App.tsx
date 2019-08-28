import React from 'react';

import './App.css';
import { PokemonSearch } from './components/PokemonSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>React with TypeScript</h2>
      <PokemonSearch/>
    </div>
  );
}

export default App;
