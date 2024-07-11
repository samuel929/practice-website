import { aCareerWidthAdms } from "../../dummyData/about/About";

function CareerWithAdams() {
  return (
    <div className='pl-11'>
      <div className='flex justify-between flex-wrap'>
        <p className='w-full sm:w-[400px] text-[34px] lato-light'>
          {aCareerWidthAdms.title}
        </p>
        <div className='flex justify-between mt-14 sm:mt-40 pr-11 sm:pr-12 flex-wrap'>
          <p className=' w-full  sm:w-[426px] mr-12 text-[14px]'>
            {aCareerWidthAdms.text1}
          </p>
          <p className='w-full  sm:w-[426px] mt-10 sm:mt-0 text-[14px]'>
            {aCareerWidthAdms.text2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerWithAdams;
