import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Feature from './Feature';
import Showcase from './Showcase';
import Blogs from './Blogs';
import Videos from './Videos';
import { AuthContext } from './AuthContext';  // Import the AuthContext

// Helper hook to parse query parameters from the URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function HomePage() {
  const query = useQuery();
  const { loginUser, isLoggedIn } = useContext(AuthContext); // Access loginUser from AuthContext

  useEffect(() => {
    // Get the username and avatar from the query parameters
    const username = query.get('username');
    const avatar = query.get('avatar');
    const id = query.get('id');

    console.log('Query parameters:', { username, avatar, id }); // Log the query parameters

    // If query parameters exist, log the user in
    if (username && avatar && id) {
      console.log('OAuth callback data found in URL:', { username, avatar, id });
      loginUser(username, avatar); // Call the loginUser function to save the data
    } else {
      console.log('No OAuth callback data found in URL.');
    }
  }, [query, loginUser]);

  return (
    <div className="w-full mx-auto bg-background pb-20">
      {/* Optionally display user info if logged in */}
      {isLoggedIn ? (
        <div className="text-white text-center py-4">
          <h1>Welcome back!</h1>
        </div>
      ) : (
        <div className="text-white text-center py-4">
          <h1>Join the Club!</h1>
        </div>
      )}

      {/* Render the rest of the homepage components */}
      <Feature />
      <Showcase />
      <Videos />
      <Blogs />
    </div>
  );
}

export default HomePage;
