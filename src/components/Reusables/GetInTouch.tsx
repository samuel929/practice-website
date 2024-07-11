import React from "react";

function GetInTouch() {
  return (
    <div className=' bg-[#1F394C] px-0 sm:px-11   py-[52px] sm:py-[100px]'>
      <p className='text-white text-[24px] px-8 sm:px-0 sm:text-[60px] lato-light'>
        Want to get in touch?
      </p>
      <div className='flex items-center px-8 sm:pl-0 sm:justify-end pt-8 sm:pt-32'>
        <p className='w-full sm:w-[394px] h-[57px] text-white text-[14px] sm:text-[16px]'>
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum
          dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='items-center justify-end pt-11 hidden sm:flex '>
        <button className='rounded-3xl border-[1px] border-white w-[200px] py-[13px] px-[30px] lato-regular text-white'>
          Contact Us
        </button>
      </div>
      <div className='flex justify-center items-center lg:hidden pt-14 px-2'>
        <button className='pt-4 pb-4 pl-7 pr-7 bg-[#FCFCFC] rounded-lg w-full h-[62px] text-[#1F394C] lato-bold'>
          View All
        </button>
      </div>
    </div>
  );
}

export default GetInTouch;
