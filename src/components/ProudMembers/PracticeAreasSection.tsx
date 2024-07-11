import React from "react";
import { PracticeAresSection } from "../../dummyData/PracticeAreas/PracticeAreas";

function PracticeAreasSection() {
  return (
    <div className='pl-11 pb-56'>
      <p className=' lato-light text-[24px] sm:text-[34px]'>Practice Areas</p>
      <p className=' pt-6 w-[314px] sm:w-[821px] lato-light text-[14px] sm:text-[16px]'>
        Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-56'>
        {PracticeAresSection.map((item) => (
          <div className='pt-16'>
            <p className='lato-regular text-[12px]'>{item.id}</p>
            <p className='pt-12 lato-bold text-[16px]'>{item.title}</p>
            <p className='pt-40 sm:pt-10 lg:hidden w-[315px] text-[14px]'>
              {item.body}
            </p>
            <div className='w-full border-[#1F394C] border-[1px] mt-11 absolute left-0 lg:hidden'></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PracticeAreasSection;
