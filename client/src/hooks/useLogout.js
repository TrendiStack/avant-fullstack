import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useLogout = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const logout = async () => {
    try {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`, {
        withCredentials: true,
      });
      await getLoggedIn();
      localStorage.removeItem('data');
      window.location.reload();
    } catch (err) {
      console.error('Error while logging out. Error: ', err.response.data.msg);
    }
  };
  return { logout };
};
