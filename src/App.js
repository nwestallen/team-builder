import './App.css';
import React, { useState } from 'react';
import TeamList from './components/TeamList';

const defaultTeam = [
  {name: 'Frank', email: 'Frank@franknbeans.com', role: 'rhythm'},
  {name: 'Jim', email: 'Jim@franknbeans.com', role: 'lead'},
  {name: 'TwentyOne', email: 'Nick@21stunes.com', role: 'feature'}
]

function App() {
  const [team, setTeam] = useState(defaultTeam);

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
