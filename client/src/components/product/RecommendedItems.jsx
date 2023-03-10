import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../Item';

const RecommendedItems = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = product?.category;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/products`
        );
        const randomize = [...data].sort(() => Math.random() - 0.5);
        setProducts(randomize);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <article>
      <h2 className="text-center my-10">You may also like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products
          ?.filter(item => item.category === category && item.id !== product.id)
          .map(product => (
            <Item key={product.id} item={product} recommendedItem />
          ))}
      </div>
    </article>
  );
};

export default RecommendedItems;
