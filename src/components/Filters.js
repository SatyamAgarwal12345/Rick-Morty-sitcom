import React from "react";

const Filters = ({ setFilters }) => {
  // Handle changes in filter selection
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value, // Update the specific filter
    }));
  };

  return (
    <div className="filters">
      <select name="status" onChange={handleChange}>
        <option value="">All Statuses</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select name="gender" onChange={handleChange}>
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <select name="species" onChange={handleChange}>
        <option value="">All Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </div>
  );
};

export default Filters;
