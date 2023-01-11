import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  errors: null,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);

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
      setErrors(err.response.data.msg);
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
      console.error('Error while logging out.', err.response.data.msg);
      setErrors(err.response.data.msg);
    }
  };

  const signup = async (
    firstName,
    lastName,
    email,
    username,
    password,
    passwordVerify
  ) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
        {
          firstName,
          lastName,
          email,
          username,
          password,
          passwordVerify,
        },
        { withCredentials: true }
      );
      setIsAuthenticated(true);
      setUser(data.user);
      localStorage.setItem('jwt', data.token);
      return data;
    } catch (err) {
      console.error('Error while signing up. Error: ', err.response.data.msg);
      setErrors(err.response.data.msg);
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
    errors,
    login,
    logout,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
