import { Link } from 'react-router-dom';
import { MockDataContext } from '../context/MockDataContext';
import { useContext } from 'react';
import CategoriesSwiper from '../components/home/CategoriesSwiper';
import Layout from '../components/Layout';
import ReviewSwiper from '../components/ReviewSwiper';
import ShopVideo from '../components/home/ShopVideo';

const Home = () => {
  const { categories, collections } = useContext(MockDataContext);

  // clone the array of categories and randomly select 4 of them
  const randomCategories = [...categories]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  // filter the collections array to get the winter collection
  const winterCollection = collections?.filter(
    collection => collection?.name === 'Winter Collection'
  )[0]?.images;
  return (
    <Layout className="flex flex-col gap-10 pb-5">
      <div className="relative flex items-center justify-center gap-10 w-full h-[60vh] ">
        <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
        <ShopVideo />
        <Link
          to="shop/categories"
          className="bg-white text-black px-10 py-2 font-medium z-30 hover:opacity-50 duration-500 ease-in-out"
        >
          SHOP MEN
        </Link>
      </div>
      <div className="text-center">
        <h2 className="text-2xl mb-5">WINTER COLLECTION</h2>
        <div className="grid grid-cols-2 gap-5">
          {winterCollection?.map((image, i) => (
            <div key={i} className="h-60 lg:h-[500px]">
              <img
                src={image}
                alt="winter collection"
                className="object-cover h-full w-full grayscale"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl mb-5">SHOP BY CATEGORY</h1>
        <div className="flex gap-10 overflow-x-hidden">
          <CategoriesSwiper categories={categories} />
        </div>
      </div>
      <ReviewSwiper />
      <div className="text-center border-t-[2px] border-neutral-300 pt-5">
        <h2 className="text-2xl mb-5">MORE TO EXPLORE</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-lg lg:text-xl lg:font-semibold">
          {randomCategories?.map((category, i) => (
            <Link
              key={i}
              to={`shop/categories/${category?.name}`}
              className={`border-black border-2 hover:bg-black hover:text-white dark:bg-black dark:text-white hover:dark:bg-white hover:dark:text-black dark:border-white lg:py-3 transition-colors duration-300 ${
                i === 0 ? 'ml-5 lg:ml-0' : i === 1 ? 'mr-5 lg:mr-0' : ''
              }`}
            >
              {category?.name}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
