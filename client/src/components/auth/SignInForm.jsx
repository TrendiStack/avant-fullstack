import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from '../form/FormButton';
import FormLabel from '../form/FormLabel';
import Layout from '../../components/Layout';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const signIn = async e => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log(data);
      if (isAuthenticated) {
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <form
        onSubmit={signIn}
        className="flex flex-col gap-10 justify-center items-center mt-10 dark:text-white"
      >
        {errors && <span className="text-red-500">{errors}</span>}
        <FormLabel
          label="Email"
          inputType="email"
          inputName="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormLabel
          label="Password"
          inputType="password"
          inputName="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <p>
          Don't have an account?{' '}
          <span className="font-bold cursor-pointer hover:text-neutral-500 transition-all duration-500">
            Sign Up
          </span>
          !
        </p>
        <FormButton label="Sign In" />
        <FormButton google={true} />
      </form>
    </Layout>
  );
};

export default SignInForm;
