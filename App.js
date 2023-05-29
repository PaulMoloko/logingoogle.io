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
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} /> {/* Add the route for the Profile component */}
    </Routes>
  </BrowserRouter>
);

export default App;
