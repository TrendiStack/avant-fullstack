import { AuthContext } from '../../context/AuthContext';
import { BsPersonFill } from 'react-icons/bs';
import { useContext } from 'react';

const AuthButton = ({ className, signin, profile, setProfile }) => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <button
      onClick={() => setProfile(!profile)}
      className={`${className}
      ${!loggedIn && signin}
    `}
    >
      <BsPersonFill />
    </button>
  );
};

export default AuthButton;
