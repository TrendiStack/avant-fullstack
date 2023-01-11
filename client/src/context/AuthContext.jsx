import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      setIsAuthenticated(true);
      setUser(data.user);
      console.log(user);
      localStorage.setItem('jwt', data.token);
      return data;
    } catch (err) {
      console.error('Error while logging in. Error: ', err.response.data.msg);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('jwt');
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem('jwt');
      checkAuth();
    } catch (err) {
      console.error('Error while logging out.', err);
    }
  };
  const checkAuth = async () => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      return;
    }
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/loggedIn`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setIsAuthenticated(true);
      setUser(data.user);
    } catch (err) {
      console.error(
        'Error while checking authentication. Error: ',
        err.response.data.msg
      );
      logout();
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
