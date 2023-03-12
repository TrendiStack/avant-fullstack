import { MockDataContext } from '../../context/MockDataContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../../components/Item';
import Layout from '../../components/Layout';
import { TitleContext } from '../../context/TitleContext';

const Products = () => {
  const { products } = useContext(MockDataContext);
  const { setTitle } = useContext(TitleContext);
  const { category } = useParams();

  useEffect(() => {
    setTitle(category);
  }, [category, setTitle]);

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
