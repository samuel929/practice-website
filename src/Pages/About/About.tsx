import { Link, useLocation } from "react-router-dom";
import Header from "../../components/ProudMembers/Header";
import AboutUsArrows from "../../components/Reusables/AboutUsArrows";
import GetInTouch from "../../components/Reusables/GetInTouch";
import News from "../../components/PersonInfo/News";
import { news } from "../../dummyData/People/Peope";
import { newsType } from "../../types/types";
import { MoreOfWhatWeDo } from "../../dummyData/about/About";
import CareerWithAdams from "../../components/About/CareerWithAdams";
import Sliders from "../../components/Reusables/Slider";

function About() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <div className=' py-80 pl-[30px]'>
        <AboutUsArrows location={location.pathname} />
      </div>
      <div className=' pb-64'>
        <CareerWithAdams />
      </div>
      <div>
        <div className='pl-11 pb-56'>
          <p className=' lato-light text-[24px] sm:text-[34px]'>
            More of what we do
          </p>
          <p className=' py-6 '></p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-56'>
            {MoreOfWhatWeDo.map((item) => (
              <div className='pt-16'>
                <p className='lato-regular text-[12px]'>{item.id}</p>
                <Link to={`${item.path}`}>
                  <p className='pt-12 lato-bold text-[16px]'>{item.title}</p>
                </Link>
                <p className='pt-40 sm:pt-10 lg:hidden w-[315px] text-[14px]'>
                  {item.body}
                </p>
                <div className='w-full border-[#1F394C] border-[1px] mt-11 absolute left-0 lg:hidden'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=' bg-[#1F394C] px-0 sm:px-11   py-[52px] sm:py-[100px] mb-60'>
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
        <div className='pt-32'>
          <GetInTouch />
        </div>
      </div>
      <div className='pb-40'>
        <Sliders />
      </div>
    </div>
  );
}

export default About;
