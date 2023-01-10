import axios from 'axios';

export const useLogout = () => {
  const logout = () => {
    try {
      localStorage.removeItem('data');
      axios.get('http://localhost:5000/api/auth/logout', {
        withCredentials: true,
      });
      window.location.reload();
    } catch (err) {
      console.error('Error while logging out. Error: ', err.response.data.msg);
    }
  };
  return { logout };
};
