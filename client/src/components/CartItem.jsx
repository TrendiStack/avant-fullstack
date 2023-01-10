import { IoCloseOutline } from 'react-icons/io5';
import { MockDataContext } from '../context/MockDataContext';
import { useContext } from 'react';
import QuantityButton from './QuantityButton';

const CartItem = ({ item }) => {
  const { name, image, price, quantity, size } = item;
  const { removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(MockDataContext);
  const addItem = () => {
    increaseQuantity(item);
  };
  const removeItem = () => {
    decreaseQuantity(item);
  };
  const deleteItem = () => {
    removeFromCart(item);
  };
  return (
    <article className="flex gap-5">
      <img
        src={image}
        alt={name}
        className="min-w-[10rem] max-w-[10rem] aspect-square "
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <div>
            <h1>{name}</h1>
            <p>{size}</p>
          </div>
          <IoCloseOutline
            onClick={deleteItem}
            className="text-xl cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-end">
          <p className="font-semibold">C${price * quantity}</p>
          <QuantityButton
            className=""
            quantity={quantity}
            increaseQuantity={addItem}
            decreaseQuantity={removeItem}
          />
        </div>
      </div>
    </article>
  );
};

export default CartItem;
