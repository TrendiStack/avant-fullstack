import { MockDataContext } from '../context/MockDataContext';
import { useContext } from 'react';
import CategoryItem from './CategoryItem';

const Categories = () => {
  const { categories } = useContext(MockDataContext);
  return (
    <section className="flex justify-center items-center flex-wrap gap-10 ">
      {categories?.map((category, i) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </section>
  );
};

export default Categories;
