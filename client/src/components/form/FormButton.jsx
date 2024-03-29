import { useAuth0 } from '@auth0/auth0-react';
import { AiOutlineGoogle } from 'react-icons/ai';
const FormButton = ({ label, google }) => {
  const { loginWithPopup } = useAuth0();
  return (
    <button
      onClick={() => {
        if (google) {
          loginWithPopup();
        }
      }}
      type="submit"
      className="font-semibold bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-all duration-300 shadow-xl w-full"
    >
      {google ? (
        <p className="inline-flex items-center">
          Sign In with Google <AiOutlineGoogle />
        </p>
      ) : (
        label
      )}
    </button>
  );
};

export default FormButton;
