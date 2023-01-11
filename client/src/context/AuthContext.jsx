import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  loggedIn: undefined,
  getLoggedIn: () => {},
});

const AuthContextProvider = props => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/auth/loggedin`,
      {
        withCredentials: true,
      }
    );
    setLoggedIn(data.loggedIn);
    console.log(data);
  };

  useEffect(() => {
    getLoggedIn();
  }, [loggedIn]);

  const value = {
    loggedIn,
    getLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
