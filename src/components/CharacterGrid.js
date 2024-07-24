import React, { useState, useEffect } from 'react'; // Importing React, useState, and useEffect hooks
import axios from 'axios'; // Importing axios for making HTTP requests
import CharacterCard from './CharacterCard'; // Importing CharacterCard component
import SearchBar from './SearchBar'; // Importing SearchBar component
import Filters from './Filters'; // Importing Filters component

const CharacterGrid = () => {
  // State to store the list of characters
  const [characters, setCharacters] = useState([]);
  // State to manage the loading state
  const [loading, setLoading] = useState(true);
  // State to manage the search term input
  const [searchTerm, setSearchTerm] = useState('');
  // State to manage filters applied to the character search
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
    species: '',
  });

  useEffect(() => {
    // Function to fetch character data from the API
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        // Making an API request to fetch characters with the given search term and filters
        const response = await axios.get('https://rickandmortyapi.com/api/character', {
          params: {
            name: searchTerm,
            status: filters.status,
            gender: filters.gender,
            species: filters.species
          },
        });
        // Updating the state with the fetched characters
        setCharacters(response.data.results);
      } catch (error) {
        // Logging any errors that occur during the fetch
        console.error('Error fetching data:', error);
      }
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData(); // Call the fetch function when the component mounts or dependencies change
  }, [searchTerm, filters]); // Dependency array: effect runs when searchTerm or filters change

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} /> {/* Render the SearchBar component */}
      <Filters setFilters={setFilters} /> {/* Render the Filters component */}
      <div className="character-grid">
        {/* Render a grid of CharacterCard components for each character */}
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid; // Exporting CharacterGrid component for use in other parts of the application
