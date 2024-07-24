import React, { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  // Local state to manage the input value
  const [inputValue, setInputValue] = useState("");

  // Handle input field changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update local input value
  };

  // Handle form submission
  function handleSubmit() {
    setSearchTerm(inputValue); // Pass the input value to parent component
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={inputValue} // Controlled input field
        onChange={handleInputChange} // Update local state on change
      />
      <button onClick={handleSubmit}>Submit</button>
      {/* Trigger search on button click */}
    </div>
  );
};

export default SearchBar;
