import { ultYpe } from "../../dummyData/IpAfrica/IpAfrica";

const FindOutMore = () => {
  return (
    <div className=' bg-[#1F394C] px-0 sm:px-11   py-[52px] sm:py-[100px]'>
      <p className='text-white text-[24px] px-8 sm:px-0 sm:text-[60px] lato-light flex justify-end'>
        Find out more
      </p>

      <div className='items-center pt-11  '>
        {ultYpe.map((item: string, index: number) => (
          <ul key={index}>
            <li className='text-white mt-6'>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FindOutMore;
