import { MockDataContext } from '../../context/MockDataContext';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import QuantityButton from '../../components/QuantityButton';
import RecommendedItems from '../../components/product/RecommendedItems';
import SizeIcon from '../../components/product/SizeIcon';
import { CartContext } from '../../context/CartContext';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { WishlistContext } from '../../context/Wishlist';
import { AuthContext } from '../../context/AuthContext';

const Product = () => {
  const [cartButton, setCartButton] = useState('ADD TO CART');
  const [itemQuantity, setItemQuantity] = useState(1);
  const { productID } = useParams();

  const { product, products, setProduct } = useContext(MockDataContext);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, isInWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { isAuthenticated } = useContext(AuthContext);

  const filteredProduct = products.filter(
    product => product.id === parseInt(productID)
  )[0];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  // Cart Functions
  const handleCart = () => {
    if (product.size === '') {
      alert('Please select a size');
      return;
    } else {
      addToCart(product, itemQuantity);
    }
  };
  const addToCartHover = () =>
    product.size === '' && setCartButton('PLEASE SELECT A SIZE');

  const increaseQuantity = () => {
    setItemQuantity(itemQuantity === 10 ? 10 : itemQuantity + 1);
  };

  const decreaseQuantity = () => {
    setItemQuantity(itemQuantity === 1 ? 1 : itemQuantity - 1);
  };

  useEffect(() => {
    setProduct(filteredProduct);
  }, [filteredProduct, setProduct]);

  // Wishlist Functions

  const handleWishlist = async () => {
    if (isInWishlist(product)) {
      await removeFromWishlist(product);
    } else {
      await addToWishlist(product);
    }
  };

  return (
    <article>
      <Layout className="grid grid1 md:grid-cols-2 gap-4 md:gap-10 lg:gap-40">
        <div className="max-h-[500px] md:max-h-[600px]">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">{product?.name}</h1>
          <p className="font-semibold">${product?.price} CAD</p>
          <div>
            <h3 className="text-lg text-zinc-400 font-semibold">
              Product Info
            </h3>
            <p className="text-sm">{product?.description}</p>
          </div>
          <div>
            <h3 className="text-lg text-zinc-400 font-semibold">Sizes</h3>
            <div className="flex gap-2 my-3">
              {sizes.map(size => (
                <SizeIcon key={size} size={size} />
              ))}
            </div>
          </div>
          <QuantityButton
            className="w-fit border-zinc-400"
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            quantity={itemQuantity}
          />
          <button
            onClick={handleWishlist}
            className={`flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black py-2 font-semibold hover:bg-neutral-300 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white duration-500 mt-2 
            ${
              isInWishlist(product)
                ? "before:content-['REMOVE_FROM_WISHLIST'] "
                : "before:content-['ADD_TO_WISHLIST'] "
            }
            
             ${
               isAuthenticated
                 ? ''
                 : "hover:before:content-['SIGN_IN_TO_ADD_TO_WISHLIST']"
             }
            `}
          >
            {isInWishlist(product) ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <AiOutlineHeart className="text-black" />
            )}
          </button>
          <button
            onMouseEnter={addToCartHover}
            onMouseLeave={() => setCartButton('ADD TO CART')}
            onClick={handleCart}
            className="bg-black text-white dark:bg-white dark:text-black py-2 font-semibold hover:bg-neutral-300 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white duration-500 mt-2"
          >
            {cartButton}
          </button>
        </div>
      </Layout>

      <RecommendedItems product={product} />
    </article>
  );
};

export default Product;
