
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import teamsData from '/Users/dallenopenshaw/Library/Mobile Documents/com~apple~CloudDocs/Winter 2025/IS 413/Mission_09_DallenOpenshaw/frontend/src/CollegeBasketballTeams.json'

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
 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>March Madness</h1>
      <div>
        
      </div>
      
    </>
  )
}

export default App
