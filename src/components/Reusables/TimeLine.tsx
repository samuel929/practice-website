import { FaCircle } from "react-icons/fa";

const TimelineItem = ({ yearRange, title, description, image }: any) => (
  <div className='flex flex-wrap-reverse sm:flex-nowrap mb-8 h-auto sm:h-[354px] pl-5'>
    <div className='w-full sm:w-[1000px] h-auto sm:h-[286px]'>
      <FaCircle className='relative right-6 top-6' />
      <h3 className='text-xl font-bold'>{yearRange}</h3>
    </div>
    <div className='h-auto sm:h-[286px] w-full sm:w-[700px] relative sm:right-24 mt-5 sm:mt-0'>
      <div className='w-[312px] sm:w-[426px]'>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
    <div className='flex flex-wrap h-auto sm:h-[286px] relative sm:bottom-60 mt-5 sm:mt-60'>
      {image.map((item, index: number) => (
        <img
          src={item}
          key={index}
          alt={title}
          className='w-[142px] h-[142px] m-2'
        />
      ))}
    </div>
  </div>
);

export default TimelineItem;
