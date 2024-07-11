import { PracticeAreasHeader } from "../../dummyData/PracticeAreas/PracticeAreas";
import { Image } from "@chakra-ui/react";
function Header() {
  return (
    <div>
      {PracticeAreasHeader.map((item, index: number) => (
        <div key={index}>
          <p className='lato-light w-[196px] sm:w-[498px] text-[24px] sm:text-[60px] pl-11 pt-20 pb-10'>
            {item.title}
          </p>
          <div className='flex pl-11 sm:justify-end sm:pr-10'>
            <p className='w-[315px] sm:w-[380px] text-[14px]'>{item.subText}</p>
          </div>
          <div className='pt-12 pb-56'>
            <Image src={item.image} className='w-full' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Header;
