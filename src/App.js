// Import necessary dependencies and components
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import Profile from './Profile';

// Define the main App component
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} /> {/* Render the Login component for the root path */}
      <Route exact path="/profile" component={Profile} /> {/* Render the Profile component for the "/profile" path */}
    </Routes>
  </BrowserRouter>
);

export default App; // Export the App component as the default export
