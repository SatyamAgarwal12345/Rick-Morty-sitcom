import React, { useState, useEffect } from 'react'; // Importing React hooks
import axios from 'axios'; // Importing axios for API requests
import { useParams } from 'react-router-dom'; // Importing useParams to get route parameters

const CharacterProfile = () => {
  const [character, setCharacter] = useState(null); // State for character data
  const [loading, setLoading] = useState(true); // State for loading status
  const param = useParams(); // Extracting route parameters
  
  // Fetch character data based on the id from URL
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${param.id}`);
        setCharacter(response.data); // Set character data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error('Error fetching character:', error); // Handle errors
        setLoading(false); // Set loading to false
      }
    };

    fetchCharacter();
  }, [param.id]); // Dependency array to refetch data if id changes

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!character) {
    return <div>Character not found</div>; // Error handling if character is not found
  }

  return (
    <div className="character-card-profile">
      <img src={character.image} alt={character.name} /> 
      <h2>{character.name}</h2> 
      <p>Status: {character.status}</p> 
      <p>Species: {character.species}</p> 
      <p>Gender: {character.gender}</p> 
      <p>Origin: {character.origin.name}</p> 
      <p>Location: {character.location.name}</p> 
      <h3>Episodes</h3> 
      <ul>
        {character.episode.map((ep, index) => (
          <li key={index}>{ep}</li> 
        ))}
      </ul>
    </div>
  );
};

export default CharacterProfile; 
