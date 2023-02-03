import { useContext } from 'react';
import Item from '../components/Item';
import Layout from '../components/Layout';
import { WishlistContext } from '../context/Wishlist';

const Wishlist = () => {
  const { wishlist, clearWishlist } = useContext(WishlistContext);

  return (
    <Layout>
      <button
        onClick={clearWishlist}
        className="my-10 p-2 rounded-mdbg-black text-white dark:bg-white dark:text-black py-2 font-semibold hover:bg-neutral-300 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white duration-500 mt-2"
      >
        Clear Wishlist
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {wishlist?.map(product => (
          <Item key={product.id} item={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Wishlist;
