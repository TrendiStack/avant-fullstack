import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, cartTotal: total, checkout } = useContext(CartContext);

  return (
    <Layout>
      <div className="flex flex-col mt-10">
        <div className="grid grid-cols-1 gap-7">
          {cart.length === 0 ? (
            <h1 className="text-center text-2xl">Your Cart is Empty :(</h1>
          ) : (
            cart.map((item, i) => <CartItem key={i} item={item} />)
          )}
        </div>

        {cart.length > 0 ? (
          <Layout className="flex flex-col gap-3 fixed left-0 2xl:left-auto  bottom-5 w-full">
            <div className="flex justify-between">
              <p>
                Subtoal:{' '}
                <span className="text-zinc-400">
                  ({`${cart.length} items`})
                </span>
              </p>
              <p>
                C$<span className="font-semibold">{total}</span>
              </p>
            </div>
            <p className="text-zinc-400 text-sm">
              No additional duties. Taxes calculated at checkout.
            </p>
            <button
              onClick={checkout}
              className="bg-black hover:opacity-50 dark:bg-white w-full text-white dark:text-black font-bold py-2 px-4 rounded duration-500"
            >
              Pay with Stripe
            </button>
          </Layout>
        ) : (
          <Link to="/home" className="flex justify-center mt-10">
            <button className="bg-black hover:opacity-50 dark:bg-white w-1/2  text-white dark:text-black font-bold py-2 px-4 rounded duration-500">
              Continue Shopping
            </button>
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
