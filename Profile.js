import React, { useState } from 'react';

function Profile({ user }) {
  const [avatar, setAvatar] = useState(user.avatar); // State to store the avatar image

  // Function to handle the file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the first file from the selected files

    // Check if a file is selected
    if (file) {
      const reader = new FileReader(); // Create a FileReader object

      // Callback function to handle the file reading
      reader.onload = () => {
        setAvatar(reader.result); // Set the avatar state to the file data URL
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="profile">
      <div className="profile-picture">
        {/* Render the avatar image */}
        {avatar && <img src={avatar} alt="Profile Picture" />}
        {/* Input field to upload a picture */}
        <input type="file" accept="image/*" onChange={handleFileUpload} />
      </div>
      <div className="profile-info">
        <h3>{user.fullName}</h3>
        <p>Email: {user.email}</p>
        {/* Additional information */}
        <p>Profile Description: {user.description}</p>
        <p>Account Creation Date: {user.creationDate}</p>
      </div>
    </div>
  );
}

export default Profile;
