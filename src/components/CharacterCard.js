import React from "react"; // Importing React
import { Link } from "react-router-dom"; // Importing Link component for navigation

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />

      <h3>{character.name}</h3>

      <p>Status: {character.status}</p>

      <p>Species: {character.species}</p>

      <p>Gender: {character.gender}</p>
      {/* Link to navigate to the character's profile page */}
      <Link to={`/character/${character.id}`}>View Profile</Link>
    </div>
  );
};

export default CharacterCard; // Exporting CharacterCard component for use in other parts of the application
