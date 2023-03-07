import { MockDataContext } from '../context/MockDataContext';
import { useContext } from 'react';
import CategoryItem from './CategoryItem';
import Layout from './Layout';

const Categories = () => {
  const { categories } = useContext(MockDataContext);
  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories?.map((category, i) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </section>
    </Layout>
  );
};

export default Categories;
