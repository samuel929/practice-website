import { FaCircle } from "react-icons/fa";

const TimelineItem = ({ yearRange, title, description, image }: any) => (
  <div className='flex flex-col md:flex-row mb-8 items-start md:items-center h-[354px] pl-5'>
    <div className='w-[1000px] h-[286px]'>
      <FaCircle className='relative right-6 top-6' />
      <h3 className='text-xl font-bold'>{yearRange}</h3>
    </div>
    <div className=' h-[286px] w-[700px] relative right-24'>
      <div className='w-[426px]'>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
    <div className=' flex  flex-wrap h-[286px]'>
      {image.map((item, index: number) => (
        <img
          src={item}
          key={index}
          alt={title}
          className='w-[192px] h-[142px]'
        />
      ))}
    </div>
  </div>
);

export default TimelineItem;
