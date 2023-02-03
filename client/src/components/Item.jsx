import ProductOverlay from './ProductOverlay';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

const Item = ({ item }) => {
  return (
    <article className="hover:grayscale relative w-full lg:hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="w-full aspect-square object-cover"
        />
      </div>
      <div className="flex justify-between py-5">
        <div className="font-semibold">
          <h1>{item.name.toUpperCase()}</h1>
          <p>${item.price} CAD</p>
        </div>
        <AiOutlineHeart />
      </div>
      <ProductOverlay productID={item.id} />
    </article>
  );
};

export default Item;
