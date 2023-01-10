import { Link } from 'react-router-dom';

const ProductOverlay = ({ productID }) => {
  return (
    <Link
      to={`/home/product/${productID}`}
      className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
    >
      <button className="bg-black hover:opacity-50 dark:bg-white w-1/2  text-white dark:text-black font-bold py-2 px-4 rounded duration-500">
        View Product
      </button>
    </Link>
  );
};

export default ProductOverlay;
