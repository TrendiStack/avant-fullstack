import { useContext } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthContext';

const AuthButton = ({ className, signin, profile, setProfile }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <button
      onClick={() => setProfile(!profile)}
      className={`${className}
      ${!isAuthenticated && signin}
    `}
    >
      <BsPersonFill />
    </button>
  );
};

export default AuthButton;
