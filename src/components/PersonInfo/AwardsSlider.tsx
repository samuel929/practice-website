import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { awards } from "../../dummyData/awards/awards";

function AwardsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className='pl-0 sm:pl-[30px]'>
      <p className='lato-regular text-[24px] sm:text-[34px] pl-11 sm:pl-0'>
        Awards & Accolades
      </p>

      <div className='mx-x-auto overflow-hidden mt-32'>
        <Slider {...settings}>
          {awards.map((award) => (
            <div key={award.id}>
              <img
                className='h-[125px] w-full object-contain'
                src={award.img}
                alt={`Award ${award.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AwardsSlider;
