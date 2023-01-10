import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${category?.name}`);
  };

  return (
    <article
      onClick={handleNavigate}
      className="relative z-30 text-center text-white p-16 border-[1px] min-w-[15rem] w-1/4 shadow-lg shadow-neutral-900 cursor-pointer hover:scale-125 duration-300"
    >
      <img
        src={category?.image}
        className="absolute w-full top-0 left-0 h-full object-cover z-[1] grayscale"
        alt={category?.name}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[2]"></div>
      <div className="relative z-10">
        <h1 className="text-2xl font-bold ">{category?.name}</h1>
        <p className="text-xl font-semibold">Explore</p>
      </div>
    </article>
  );
};

export default CategoryItem;
