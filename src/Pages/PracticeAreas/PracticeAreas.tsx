import Header from "../../components/ProudMembers/Header";
import PracticeAreasSection from "../../components/ProudMembers/PracticeAreasSection";
import ProudMembers from "../../components/PersonInfo/ProudMembers";
import { news } from "../../dummyData/People/Peope";
import News from "../../components/PersonInfo/News";
import { newsType } from "../../types/types";
import GetInTouch from "../../components/Reusables/GetInTouch";
import AboutUsArrows from "../../components/Reusables/AboutUsArrows";
// import { testimonials } from "../../dummyData/PracticeAreas/PracticeAreas";
import { useLocation } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import { useRef } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function PracticeAreas() {
  const location = useLocation();
  // const swiperRef = useRef(null);
  return (
    <div>
      <Header />
      <PracticeAreasSection />
      <div className=' bg-[#1F394C]   py-[52px] sm:py-[100px]'>
        <div className='flex items-center justify-start sm:justify-between px-6 sm:px-11 py-6'>
          <p className='lato-light text-[24px] sm:text-[34px] text-[#FCFCFC] '>
            News
          </p>
          <p className='lato-bold  hidden sm:block text-[#FCFCFC] text-[14px] cursor-pointer'>
            View all
          </p>
        </div>
        <div className='grid  grid-cols-1 sm:grid-cols-3 gap-3'>
          {news.map((item: newsType) => (
            <News item={item} />
          ))}
        </div>
        <div className='flex justify-center items-center sm:hidden'>
          <button className='pt-4 pb-4 pl-7 pr-7 bg-[#FCFCFC] rounded-lg w-[350px] h-[62px] text-[#1F394C] lato-bold'>
            View All
          </button>
        </div>
        {/* <div className='pt-32'>
          <p className='text-[34px] lato-light text-white pl-11'>
            Testimonials
          </p>
          <div className='flex '>
            <div className='w-full sm:w-[1900px]'>
              <p className='w-[438px] h-[57px] text-white pl-11'>
                {testimonials.text}
              </p>
            </div>
            <div>
              <Swiper
                modules={[Navigation]}
                spaceBetween={3}
                slidesPerView={2}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className='mySwiper w-[200px] sm:w-[800px] '
              >
                {testimonials.card.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='px-[30px] py-[40px] bg-white rounded-[8px] w-[380px] h-[300px] '>
                      <p className='text-[14px] w-[320px] h-[85px] '>
                        {item.text}
                      </p>
                      <p className='lato-bold text-[12px] relative top-32'>
                        {item.button}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='flex justify-end'>
                <div className='swiper-custom-navigation mt-9 flex justify-between w-40 z-10 transform -translate-y-1/2 relative right-4'>
                  <p className=' relative top-1'>
                    <FaArrowLeftLong
                      className='swiper-button-prev'
                      color='white'
                      size={5}
                      onClick={() => swiperRef.current?.slidePrev()}
                    />
                  </p>
                  <p className='text-white lato-light text-[16px] cursor-pointer relative top-1'>
                    Swipe
                  </p>
                  <p className='relative top-1'>
                    <FaArrowRightLong
                      className='swiper-button-next '
                      color='white'
                      size={5}
                      onClick={() => swiperRef.current?.slideNext()}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <ProudMembers />
      <div className='py-80 pl-[30px]'>
        <AboutUsArrows location={location.pathname} />
      </div>
      <div className='pb-40'>
        <GetInTouch />
      </div>
    </div>
  );
}

export default PracticeAreas;
