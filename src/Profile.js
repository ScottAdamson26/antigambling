import React, { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Import the AuthContext

function Profile() {
  const { username, avatar, id, isLoggedIn } = useContext(AuthContext); // Access user data from AuthContext

  if (!isLoggedIn) {
    return <div>You are not logged in.</div>;
  }

  return (
    <div className="profile-page bg-navBg flex flex-col items-center p-10">
          <img
        src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`}
        alt={`${username}'s avatar`} 
        className='rounded-full w-40 h-40 order-solid border-4 border-lightOrange shadow-2xl'
      />
      <h1 className='text-white font-semibold text-xl mt-6'>{username}</h1>
    
    </div>
  );
}

export default Profile;
