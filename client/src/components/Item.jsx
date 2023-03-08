import ProductOverlay from './ProductOverlay';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { useContext } from 'react';
import { WishlistContext } from '../context/Wishlist';

const Item = ({ item, recommendedItem }) => {
  const { isInWishlist } = useContext(WishlistContext);
  return (
    <article
      className={`${
        recommendedItem ? 'mb-12' : 'lg:hover:scale-105'
      } hover:grayscale relative w-full  transition-transform duration-300 cursor-pointer`}
    >
      <img
        src={item.image}
        alt={item.name}
        className={`${
          recommendedItem ? 'h-full' : 'aspect-square'
        } w-full object-cover`}
      />

      <div className="flex justify-between py-5">
        <div className="font-semibold">
          <h1>{item.name.toUpperCase()}</h1>
          <p>${item.price} CAD</p>
        </div>
        {isInWishlist(item) ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <AiOutlineHeart />
        )}
      </div>
      <ProductOverlay productID={item.id} />
    </article>
  );
};

export default Item;
