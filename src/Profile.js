import React, { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Import the AuthContext

function Profile() {
  const { username, avatar, id, isLoggedIn } = useContext(AuthContext); // Access user data from AuthContext

  if (!isLoggedIn) {
    return <div>You are not logged in.</div>;
  }

  return (
    <div className="profile-page">
      <h1>Welcome, {username}</h1>
      <img
        src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`}
        alt={`${username}'s avatar`}
      />
    </div>
  );
}

export default Profile;
