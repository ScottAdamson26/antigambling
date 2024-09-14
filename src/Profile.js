import React, { useEffect, useState } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user's Discord data from the backend
    const fetchUser = async () => {
      try {
        const response = await fetch('/.netlify/functions/discord-callback');
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h1>Welcome, {user.username}#{user.discriminator}</h1>
      <img
        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
        alt={`${user.username}'s avatar`}
      />
    </div>
  );
}

export default Profile;
