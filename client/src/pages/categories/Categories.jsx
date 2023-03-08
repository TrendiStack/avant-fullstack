import { MockDataContext } from '../../context/MockDataContext';
import { useContext } from 'react';
import CategoryItem from '../../components/CategoryItem';
import Layout from '../../components/Layout';
import ProductLayout from '../../components/ProductLayout';

const Categories = () => {
  const { categories } = useContext(MockDataContext);
  return (
    <Layout>
      <ProductLayout>
        {categories?.map((category, i) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ProductLayout>
    </Layout>
  );
};

export default Categories;
