import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  errors: null,
  login: () => {},
  logout: () => {},
  signup: () => {},
  handleUpdate: () => {},
  setErrors: () => {},
  handlePasswordUpdate: () => {},
  setFile: () => {},
  uploadFile: () => {},
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('jwt') ? true : false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );
  const [errors, setErrors] = useState(null);

  const [file, setFile] = useState(null);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      setIsAuthenticated(true);
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(JSON.parse(localStorage.getItem('user')));
      return data;
    } catch (err) {
      console.error('Error while logging in. Error: ', err.response.data.msg);
      setErrors(err.response.data.msg);
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`);
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
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
        `${process.env.REACT_APP_BACKEND_URL}/api/auth`,
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
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(JSON.parse(localStorage.getItem('user')));
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
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/loggedIn`,
        {
          headers: { 'auth-token': token },
        }
      );
      setIsAuthenticated(true);
    } catch (err) {
      console.error(
        'Error while checking authentication. Error: ',
        err.response.data.msg
      );
      logout();
    }
  };

  const handleUpdate = async (header, newData) => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      return;
    }
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/${
          header === 'First Name'
            ? 'changefirstname'
            : header === 'Last Name'
            ? 'changelastname'
            : header === 'Username'
            ? 'changeusername'
            : 'changeemail'
        }`,
        {
          email: user.email,
          [header === 'First Name'
            ? 'firstName'
            : header === 'Last Name'
            ? 'lastName'
            : header === 'Username'
            ? 'username'
            : 'newEmail']: newData,
        },
        {
          headers: { 'auth-token': token },
        }
      );
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(JSON.parse(localStorage.getItem('user')));
      return data;
    } catch (err) {
      console.error(
        'Error while updating user. Error: ',
        err.response.data.msg
      );
      setErrors(err.response.data.msg);
    }
  };

  const handlePasswordUpdate = async (password, verifyPassword) => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      return;
    }
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/changepassword`,
        {
          email: user.email,
          password,
          verifyPassword,
        },
        {
          headers: { 'auth-token': token },
        }
      );
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('jwt', data.token);
      setUser(JSON.parse(localStorage.getItem('user')));
      return data;
    } catch (err) {
      console.error(
        'Error while updating user. Error: ',
        err.response.data.msg
      );
      setErrors(err.response.data.msg);
    }
  };

  const uploadFile = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'auth-token': localStorage.getItem('jwt'),
            'user-email': user.email,
          },
        }
      );
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(JSON.parse(localStorage.getItem('user')));
    } catch (err) {
      console.log(err.response.data.msg);
      setErrors(err.response.data.msg);
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
    setErrors,
    handleUpdate,
    handlePasswordUpdate,
    setFile,
    uploadFile,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
