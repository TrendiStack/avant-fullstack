import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const TotalItemIcon = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart.length > 0 && (
        <div className="absolute -top-2 -right-2 flex items-center justify-center rounded-full h-4 w-4 text-sm bg-black text-white dark:bg-white dark:text-black">
          {cart.length}
        </div>
      )}
    </>
  );
};

export default TotalItemIcon;
