import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const UserDataDisplay = ({ header, data, form, verification }) => {
  const [newData, setNewData] = useState('');
  const [message, setMessage] = useState('');
  const { handleUpdate, errors, setErrors, user } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await handleUpdate(header, newData);
      setMessage(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
      setErrors('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, errors, setErrors]);

  return (
    <>
      {form ? (
        <form
          onSubmit={handleSubmit}
          className="bg-slate-200 dark:bg-zinc-900 dark:text-white py-4 rounded-xl duration-700 "
        >
          <span
            className={`text-green-500
        ${
          message ? 'top-10' : '-top-10'
        } duration-1000 fixed left-1/2 transform -translate-x-1/2 transition-all`}
          >
            {message}
          </span>
          <span
            className={`text-red-500
        ${
          errors ? 'top-10' : '-top-10'
        } duration-1000 fixed left-1/2 transform -translate-x-1/2 transition-all`}
          >
            {errors}
          </span>
          <label className="indent-3 block text-slate-600 dark:text-zinc-400 duration-700">
            {header}
          </label>
          <input
            type="text"
            name={header}
            value={newData}
            onChange={e => setNewData(e.target.value)}
            placeholder={data}
            className="ml-3 text-slate-600 dark:text-zinc-400 duration-700 bg-transparent"
          />
        </form>
      ) : verification ? (
        <div className="bg-slate-200 dark:bg-zinc-900 dark:text-white py-4 rounded-xl duration-700 ">
          {user?.isVerified ? (
            <div className="text-green-500 flex items-center ml-3 gap-2">
              <BsPatchCheckFill />
              <p>Verified</p>
            </div>
          ) : (
            <div className="flex justify-between mx-3">
              <div className="text-red-500 flex items-center  gap-2">
                <BsPatchCheckFill />
                <p>Not Verified</p>
              </div>
              <button class="text-sm group">
                <span class="bg-left-bottom lg:bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Resend Verification Email
                </span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="indent-3 bg-slate-200 dark:bg-zinc-900 dark:text-white py-4 rounded-xl duration-700 ">
          <Link to="/home/change-password"> Change Password</Link>
        </div>
      )}
    </>
  );
};

export default UserDataDisplay;
