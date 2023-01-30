import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const { handlePasswordUpdate, errors, setErrors } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await handlePasswordUpdate(password, verifyPassword);
      setSuccessMsg(data.msg);
      if (!errors) {
        const timer = setTimeout(() => {
          navigate('/home');
        }, 3000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMsg('');
      setErrors('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [successMsg, errors, setErrors]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 bg-slate-200 dark:bg-zinc-900 dark:text-white py-4 rounded-xl duration-700"
    >
      <span
        className={`text-green-500 ${
          successMsg ? 'top-10' : '-top-10'
        } duration-1000 fixed left-1/2 transform -translate-x-1/2 transition-all`}
      >
        {successMsg}
      </span>
      <span
        className={`text-red-500 ${
          errors ? 'top-10' : '-top-10'
        } duration-1000 fixed left-1/2 transform -translate-x-1/2 transition-all`}
      >
        {errors}
      </span>
      <div>
        <label
          htmlFor="password"
          className="indent-3 block text-slate-600 dark:text-zinc-400 duration-700"
        >
          New Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="ml-3 text-slate-600 dark:text-zinc-400 duration-700"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="indent-3 block text-slate-600 dark:text-zinc-400 duration-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="verifyPassword"
          value={verifyPassword}
          onChange={e => setVerifyPassword(e.target.value)}
          className="ml-3 text-slate-600 dark:text-zinc-400 duration-700"
        />
      </div>
      <button type="submit" className="ml-3">
        Change Password
      </button>
    </form>
  );
};

export default ChangePassword;
