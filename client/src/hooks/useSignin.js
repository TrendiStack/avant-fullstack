import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';
import axios from 'axios';

export const useSignin = () => {
  const [errors, setErrors] = useState(null);
  const { getLoggedIn } = useContext(AuthContext);

  const signin = async (email, password) => {
    try {
      const loginData = {
        email,
        password,
      };

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
        loginData,
        {
          withCredentials: true,
        }
      );

      await getLoggedIn();
    } catch (err) {
      setErrors(err.response.data.msg);
    }
  };

  return { signin, errors };
};
