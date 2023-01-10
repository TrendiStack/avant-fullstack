import { MockDataContext } from '../context/MockDataContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemSmall from '../components/ItemSmall';

export const SearchResults = () => {
  const { allProducts } = useContext(MockDataContext);
  const { id } = useParams();
  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(id?.toLowerCase())
  );

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ItemSmall key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center">No products found</p>
      )}
    </div>
  );
};
