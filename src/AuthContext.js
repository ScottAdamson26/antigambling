import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component that will wrap the app and provide the context
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    username: null,
    avatar: null,
    id: null,  // Include user ID
    isLoggedIn: false,
  });

  // On component mount, check if the user is already logged in (from localStorage or sessionStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log("User found in localStorage: ", user);

      setAuthState({
        username: user.username,
        avatar: user.avatar,
        id: user.id,  // Set user ID from localStorage
        isLoggedIn: true,
      });

      console.log("Auth state updated from localStorage:", {
        username: user.username,
        avatar: user.avatar,
        id: user.id,
        isLoggedIn: true,
      });
    } else if (process.env.NODE_ENV === 'development') {
      // Temporary data for local development
      console.log("No user found in localStorage, using mock data for development.");
      const mockUser = {
        username: 'ventful1',
        avatar: '618f6615165476c0dc4418e5b5352614', // Mock avatar hash
        id: '1115915107025817661',  // Mock user ID
      };
      setAuthState({
        username: mockUser.username,
        avatar: mockUser.avatar,
        id: mockUser.id,
        isLoggedIn: true,
      });

      console.log("Using mock user for development:", mockUser);
    } else {
      console.log("No user found in localStorage.");
    }
  }, []);

  // Function to log in the user and store the data in context and localStorage
  const loginUser = (username, avatar, id) => {
    console.log("Logging in user:", { username, avatar, id });  // Ensure id is passed correctly
    
    setAuthState({
      username: username,
      avatar: avatar,
      id: id,  // Store the user ID
      isLoggedIn: true,
    });

    // Save the user data to localStorage to persist it
    localStorage.setItem('user', JSON.stringify({ username, avatar, id }));
    console.log("User data saved to localStorage.");
  };

  // Function to log out the user and clear the data from context and localStorage
  const logoutUser = () => {
    console.log("Logging out user.");

    setAuthState({
      username: null,
      avatar: null,
      id: null,  // Clear the user ID
      isLoggedIn: false,
    });

    // Clear the user data from localStorage
    localStorage.removeItem('user');
    console.log("User data removed from localStorage.");
  };

  return (
    <AuthContext.Provider value={{ ...authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
