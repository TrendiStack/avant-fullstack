import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-9xl font-bold">Success</h1>
      <h2 className="text-6xl font-bold">Thank you for your purchase</h2>
      <Link
        to="/home"
        className="px-4 py-2 mt-4 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Success;
