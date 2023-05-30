import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  // Simulating data retrieval
  useEffect(() => {
    // Replace this with your actual data retrieval logic
    const fetchUserData = async () => {
      try {
        // Simulating an API call to retrieve user data
        const response = await fetch('api/user');
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile">
      <h3>Profile</h3>
      {user ? (
        <div className="profile-details">
          <img src={user.profilePicture} alt="Profile Picture" />
          <p>Full Name: {user.fullName}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
