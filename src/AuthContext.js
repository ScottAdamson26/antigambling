import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component that will wrap the app and provide the context
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    username: null,
    avatar: null,
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
        isLoggedIn: true,
      });

      console.log("Auth state updated from localStorage:", {
        username: user.username,
        avatar: user.avatar,
        isLoggedIn: true,
      });
    } else {
      console.log("No user found in localStorage.");
    }
  }, []);

  // Function to log in the user and store the data in context and localStorage
  const loginUser = (username, avatar) => {
    console.log("Logging in user:", { username, avatar });
    
    setAuthState({
      username: username,
      avatar: avatar,
      isLoggedIn: true,
    });

    // Save the user data to localStorage to persist it
    localStorage.setItem('user', JSON.stringify({ username, avatar }));
    console.log("User data saved to localStorage.");
  };

  // Function to log out the user and clear the data from context and localStorage
  const logoutUser = () => {
    console.log("Logging out user.");

    setAuthState({
      username: null,
      avatar: null,
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
