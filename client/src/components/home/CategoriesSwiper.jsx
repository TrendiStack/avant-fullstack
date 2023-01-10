import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

const CategoriesSwiper = ({ categories }) => {
  const navigate = useNavigate();

  const handleCategory = category => {
    navigate(`shop/categories/${category}`);
  };

  return (
    <Swiper spaceBetween={30} slidesPerView={1.3}>
      {categories?.map((category, i) => (
        <SwiperSlide key={category?.id} className="text-left cursor-pointer">
          <div
            onClick={() => handleCategory(category?.name)}
            className="h-80 lg:min-h-[500px] mb-3 w-full"
          >
            <img
              src={category?.image}
              alt={category?.name}
              className="object-cover h-full w-full grayscale"
            />
          </div>
          <h3>{category?.name}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoriesSwiper;
