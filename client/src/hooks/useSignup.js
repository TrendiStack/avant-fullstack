import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';
import axios from 'axios';

export const useSignup = () => {
  const [errors, setErrors] = useState(null);
  const { getLoggedIn } = useContext(AuthContext);
  const signup = async signUpData => {
    try {
      // send post request to server
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
        signUpData,
        {
          withCredentials: true,
        }
      );
      // get logged in user
      await getLoggedIn();

      // save to local storage
      localStorage.setItem('data ', JSON.stringify(res.data));
    } catch (err) {
      console.error('Error while signing up. Error: ', err.response.data.msg);
      err.response.data.msg && setErrors(err.response.data.msg);
    }
  };

  return { signup, errors };
};
