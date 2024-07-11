import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImages } from "../../dummyData/about/About";
function Sliders() {
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
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className='mx-x-auto overflow-hidden mt-32'>
        <Slider {...settings}>
          {sliderImages.map((award) => (
            <div key={award.id} className='px-2'>
              <img
                className='h-[448px] w-[355px] bg-cover bg-center '
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

export default Sliders;
