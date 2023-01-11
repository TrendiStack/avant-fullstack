import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormButton from '../form/FormButton';
import FormLabel from '../form/FormLabel';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const { errors, signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const toSignIn = () => {
    navigate('/home/sign-in');
  };

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
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        <span
          onClick={toSignIn}
          className="text-blue-500 cursor-pointer hover:text-blue-900 transition-all duration-500"
        >
          Sign In
        </span>
        .
      </p>
      <FormButton label="Sign Up" />
    </form>
  );
};

export default SignUpForm;
