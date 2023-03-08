import { MockDataContext } from '../../context/MockDataContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../../components/Item';
import Layout from '../../components/Layout';
import ProductLayout from '../../components/ProductLayout';

const SearchResults = () => {
  const { products } = useContext(MockDataContext);
  const { query } = useParams();
  const filteredProducts = products?.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <ProductLayout>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Item key={product.id} item={product} />
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
      </ProductLayout>
    </Layout>
  );
};

export default SearchResults;
