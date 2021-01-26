import './App.css';
import React, { useState } from 'react';
import TeamList from './components/TeamList';

function App() {
  const [team, setTeam] = useState(['Frank','Jim','TwentyOne']);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder App</h1>
      </header>
      <TeamList team={team} />
    </div>
  );
}

export default App;
