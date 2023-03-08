import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-6xl font-bold">Page Not Found</h2>
      {/* styles the button better */}
      <Link
        to="/home"
        className="px-4 py-2 mt-4 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
