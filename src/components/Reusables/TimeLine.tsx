const TimelineItem = ({ yearRange, title, description, image }: any) => (
  <div className='flex flex-col md:flex-row mb-8 items-start md:items-center'>
    <div className='md:w-1/4'>
      <h3 className='text-xl font-bold'>{yearRange}</h3>
    </div>
    <div className='md:w-3/4 flex flex-col md:flex-row items-start md:items-center'>
      <div className='md:w-2/3'>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <p className='text-sm'>{description}</p>
      </div>
      <div className='md:w-1/3 mt-4 md:mt-0'>
        <img src={image} alt={title} className='w-full h-auto' />
      </div>
    </div>
  </div>
);

export default TimelineItem;
