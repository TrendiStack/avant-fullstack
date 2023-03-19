import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from '../../components/form/FormButton';
import FormLabel from '../../components/form/FormLabel';
import Layout from '../../components/Layout';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, isAuthenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const signIn = async e => {
    e.preventDefault();
    try {
      await login(email, password);
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
        className="flex flex-col gap-10 justify-center items-center mt-10 mb-5 dark:text-white"
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
          <Link
            to="/home/sign-up"
            className="font-bold cursor-pointer hover:text-neutral-500 transition-all duration-500"
          >
            Sign Up
          </Link>
          !
        </p>
        <FormButton label="Sign In" />
      </form>
      <FormButton google={true} />
    </Layout>
  );
};

export default SignInForm;
