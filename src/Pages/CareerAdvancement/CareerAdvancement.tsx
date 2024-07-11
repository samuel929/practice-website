import { Breadcrumb, BreadcrumbItem, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PracticeAreasHeader } from "../../dummyData/PracticeAreas/PracticeAreas";
import Slider from "../../components/Reusables/Slider";
import CareerWithAdams from "../../components/About/CareerWithAdams";

function CareerAdvancement() {
  return (
    <div>
      {" "}
      <div className='pl-0 sm:pl-11 pt-28'>
        <Breadcrumb>
          <BreadcrumbItem className='pl-2 sm:pl-0'>
            <Link
              className='lato-regular text-[14px] sm:text-[16px] text-[#252525]'
              to='/about'
            >
              About
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem className='pl-2 sm:pl-0'>
            <Link
              className='lato-regular text-[14px] sm:text-[16px] text-[#252525]'
              to={``}
            >
              Corporate Social Investment
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage className='pl-2 sm:pl-0'>
            <Link
              className='lato-regular text-[14px] sm:text-[16px] text-[#252525]'
              to={``}
            >
              Career Advancement
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        {PracticeAreasHeader.map((item, index: number) => (
          <div key={index}>
            <p className='lato-light w-full sm:w-full text-[24px] sm:text-[60px] pl-7 sm:pl-11 pt-20 pb-10'>
              Career Advancement
            </p>

            <div className='pt-12 pb-56'>
              <Image src={item.image} className='w-full' />
            </div>
          </div>
        ))}
      </div>
      <div>
        <CareerWithAdams />
      </div>
      <div className='pb-96 pt-44'>
        <Slider />
      </div>
    </div>
  );
}

export default CareerAdvancement;
