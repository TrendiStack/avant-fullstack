import { AiFillStar } from 'react-icons/ai';
import { MockDataContext } from '../context/MockDataContext';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ReviewSwiper = () => {
  const { reviews } = useContext(MockDataContext);
  return (
    <div className="dark:bg-black text-black dark:text-white p-5">
      <h2 className="text-xl mb-5">OUR CUSTOMERS ARE THE BEST</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {reviews?.map((review, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-1 lg:flex flex-row-reverse gap-5">
              <div className="h-80 lg:min-h-[600px] lg:w-[250%]">
                <img
                  src={review?.image}
                  alt={review?.name}
                  className="h-full w-full object-cover grayscale shadow-lg"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 lg:place-self-center">
                <div className="flex gap-2">
                  {Array(review?.rating)
                    .fill()
                    .map((_, i) => (
                      <AiFillStar
                        key={i}
                        className="text-zinc-900 dark:text-neutral-200"
                      />
                    ))}
                </div>
                <p className="text-xl font-medium">{review?.comment}</p>
                <p className="font-medium"> - {review?.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSwiper;
