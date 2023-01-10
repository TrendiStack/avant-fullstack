import axios from 'axios';

export const useLogout = () => {
  const logout = () => {
    try {
      localStorage.removeItem('data');
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`, {
        withCredentials: true,
      });
      window.location.reload();
    } catch (err) {
      console.error('Error while logging out. Error: ', err.response.data.msg);
    }
  };
  return { logout };
};
