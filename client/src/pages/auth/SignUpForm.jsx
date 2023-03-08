import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormButton from '../../components/form/FormButton';
import FormLabel from '../../components/form/FormLabel';
import Layout from '../../components/Layout';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const { isAuthenticated, errors, signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const signUp = async e => {
    e.preventDefault();
    try {
      await signup(
        firstName,
        lastName,
        email,
        username,
        password,
        passwordVerify
      );
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
        onSubmit={signUp}
        className="flex flex-col gap-10 justify-center items-center mt-10"
      >
        {errors && <span className="text-red-500">{errors}</span>}
        <FormLabel
          label="First Name"
          inputType="text"
          inputName="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <FormLabel
          label="Last Name"
          inputType="text"
          inputName="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <FormLabel
          label="Username"
          inputType="text"
          inputName="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
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
        <FormLabel
          label="Confirm Password"
          inputType="password"
          inputName="passwordVerify"
          value={passwordVerify}
          onChange={e => setPasswordVerify(e.target.value)}
        />
        <p>
          Already have an account?{' '}
          <Link
            to="/home/sign-in"
            className="font-bold cursor-pointer hover:text-neutral-500 transition-all duration-500"
          >
            Sign In
          </Link>
          .
        </p>
        <FormButton label="Sign Up" />
      </form>
    </Layout>
  );
};

export default SignUpForm;
