import { MockDataContext } from '../context/MockDataContext';
import { useContext, useState } from 'react';
import Layout from '../components/Layout';
import QuantityButton from '../components/QuantityButton';
import RecommendedItems from '../components/product/RecommendedItems';
import SizeIcon from '../components/product/SizeIcon';

const Product = () => {
  const [cartButton, setCartButton] = useState('ADD TO CART');
  const [itemQuantity, setItemQuantity] = useState(1);
  const { product, addToCart } = useContext(MockDataContext);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

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
