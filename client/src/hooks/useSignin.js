import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';
import axios from 'axios';

export const useSignin = () => {
  const [errors, setErrors] = useState(null);
  const { getLoggedIn } = useContext(AuthContext);
  const signin = async signinData => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
        signinData,
        {
          withCredentials: true,
        }
      );

      // get logged in user
      await getLoggedIn();

      // save to local storage
      localStorage.setItem('data', JSON.stringify(res.data));
    } catch (err) {
      console.error('Error while signing in. Error: ', err.response.data.msg);
      err.response.data.msg && setErrors(err.response.data.msg);
    }
  };

  return { signin, errors };
};
