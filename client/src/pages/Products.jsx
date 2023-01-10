import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Item from '../components/Item';
import Layout from '../components/Layout';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        // add size and quantity to each product
        const newArr = data.products.map(product => ({
          ...product,
          size: '',
          quantity: 1,
        }));
        setProducts(newArr);
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
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products
          ?.filter(product => product.category === category)
          .map(product => (
            <Item key={product.id} item={product} />
          ))}
      </div>
    </Layout>
  );
};

export default Products;
