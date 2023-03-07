import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${category?.name}`);
  };

  return (
    <article
      onClick={handleNavigate}
      className="grayscale relative w-full lg:hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <img
        src={category?.image}
        className="w-full aspect-square object-cover"
        alt={category?.name}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black hover:bg-transparent bg-opacity-20 z-[2]"></div>
      <div className="relative z-10">
        <h1 className="text-2xl font-bold ">{category?.name}</h1>
        <p className="text-xl font-semibold">Explore</p>
      </div>
    </article>
  );
};

export default CategoryItem;
