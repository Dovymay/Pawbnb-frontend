import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/config';

const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  //States to control the current User
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Navigation
  const nav = useNavigate();

  //Function to authenticate the token
  const authenticateUser = async function () {
    const theToken = localStorage.getItem('authToken');
    //If there is no token, just stop loading and say "not logged in"
    if (!theToken) {
      setIsLoading(false);
      setIsLoggedIn(false);
      setCurrentUser(null);
      return;
    }

    try {
      const { data } = await axios.get(`${API_URL}/auth/verify`, {
        headers: { Authorization: `Bearer ${theToken}` },
      });

      setToken(theToken);
      setIsLoading(false);
      setIsLoggedIn(true);
      setCurrentUser(data);
    } catch (error) {
      console.log('Error:', error.message);
      localStorage.removeItem('authToken');
      setIsLoading(false);
      setIsLoggedIn(false);
      setCurrentUser(null);
      setToken(null);
      //Redirect if WHOLE app is to be private
      //   nav('/login');
    }
  };

  //Logout function that deletes token from lStorage and navs to login
  function handleLogout() {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setCurrentUser(null);
    setToken(null);
    nav('/login');
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        token,
        isLoading,
        isLoggedIn,
        authenticateUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthWrapper };
