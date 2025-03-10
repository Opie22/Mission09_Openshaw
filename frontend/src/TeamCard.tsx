// TeamCard.tsx
import React from 'react';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamCard: React.FC<Team> = ({ school, name, city, state }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
      <h3>{school}</h3>
      <p>Mascot: {name}</p>
      <p>Location: {city}, {state}</p>
    </div>
  );
};

export default TeamCard;