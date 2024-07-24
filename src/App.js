import React from "react"; // Importing React to use JSX
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing React Router components for routing
import CharacterGrid from "./components/CharacterGrid"; // Importing CharacterGrid component
import CharacterProfile from "./components/CharacterProfile"; // Importing CharacterProfile component
import "./App.css";

// Main App component
const App = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<CharacterGrid />} />{" "}
            {/* Route for the home page displaying a grid of characters */}
            <Route path="/character/:id" element={<CharacterProfile />} />{" "}
            {/* Route for displaying an individual character's profile */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App; // Exporting the App component for use in other parts of the application
