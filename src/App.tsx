import React from 'react';
import './App.css';
import teamsData from './teams.json';

//A team “card” that contains the following information about each school:
//FC => Functional Component,  that takes the following as parametes. These are the props that are being passed.
const TeamCard: React.FC<{
  team: {
    school: string;
    name: string; // Mascot name
    city: string;
    state: string;
  };
}> = ({ team }) => {
  //wanted to add more css, made it so that each card gets its own color
  const backgroundColor = `hsla(${Math.random() * 360}, 100%, 75%, 1)`;
  return (
    <div className="card1" style={{ backgroundColor }}>
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
};

//: A list of team cards that shows all the teams on the list.
const TeamsList: React.FC<{
  teams: Array<{
    school: string;
    name: string;
    city: string;
    state: string;
  }>;
}> = ({ teams }) => {
  return (
    <div className="teams-list">
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* A heading section at the top introducing the user to what the site is. */}
      <header className="App-header">
        <h1>NCAA Basketball Teams</h1>
        <p>
          This website offers a comprehensive overview of all the information on
          the NCAA Basketball college teams. Scroll down below to find your
          favorite team and their information!
        </p>
      </header>

      <div className="teams-container">
        <TeamsList teams={teamsData.teams} />
      </div>

      <footer className="App-footer">© 2024 NCAA Basketball Teams</footer>
    </div>
  );
}

export default App;
