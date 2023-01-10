import { useContext } from 'react';
import { MockDataContext } from '../../context/MockDataContext';

const SizeIcon = ({ size }) => {
  const { product, setProduct } = useContext(MockDataContext);
  return (
    <p
      onClick={() => setProduct({ ...product, size: size })}
      className={`flex items-center justify-center border border-neutral-800 px-2 py-1 w-9 cursor-pointer ${
        product?.size === size && 'bg-neutral-800'
      }`}
    >
      {size}
    </p>
  );
};

export default SizeIcon;
