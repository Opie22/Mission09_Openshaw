
import './App.css'
import TeamCard from './TeamCard'; // Import the TeamCard component
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

function Welcome(){
  
  return(<h1>March Madness Teams</h1>)

}

function TeamList(){
  const [teams, setTeams] = useState<Team[]>([]);

  // Example using local JSON:
  useEffect(() => {
    const localTeams = getTeamsFromLocalFile();
    setTeams(localTeams);
  }, []);



  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap',  justifyContent: 'center' }}>
        {teams.map((team) => (
          <TeamCard
            key={team.tid}
            school={team.school}
            name={team.name}
            city={team.city}
            state={team.state}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
  
    </>
  )
}

export default App;
