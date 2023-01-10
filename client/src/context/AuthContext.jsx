import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  loggedIn: undefined,
  getLoggedIn: () => {},
});

const AuthContextProvider = props => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async () => {
    const loggedInRes = await axios.get(
      'http://localhost:5000/api/auth/loggedin',
      {
        withCredentials: true,
      }
    );
    setLoggedIn(loggedInRes.data);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  const value = {
    loggedIn,
    getLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
