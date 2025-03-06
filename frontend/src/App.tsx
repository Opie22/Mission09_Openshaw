
import './App.css'
import teamsData from './CollegeBasketballTeams.json'
import React, { useState, useEffect } from 'react';

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface TeamsData {
  teams: Team[];
}

export const getTeamsFromLocalFile = (): Team[] => {
  return (teamsData as TeamsData).teams;
};

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  // Example using local JSON:
  useEffect(() => {
    const localTeams = getTeamsFromLocalFile();
    setTeams(localTeams);
  }, []);



  return (
    <div>
      <h1>March Madness Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.tid}>
            {team.school} {team.name} ({team.abbrev}) - {team.city}, {team.state}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
