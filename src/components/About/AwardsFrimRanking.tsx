import { Divider, Image } from "@chakra-ui/react";
import { firmRanking } from "../../dummyData/about/About";

function AwardsFrimRanking() {
  return (
    <div className='pl-0 sm:px-11'>
      {firmRanking.map((item, index: number) => (
        <div
          key={index}
          className='flex  flex-wrap sm:flex-nowrap justify-between'
        >
          <div className='flex flex-col h-full'>
            <p className='lato-bold text-[34px] pl-[30px] sm:pl-0'>
              {item.title}
            </p>
            <Divider className='bg-black pl-[30px] sm:pl-0' />
            <p className='lato-light text-[34px] mt-11 pl-[30px] sm:pl-0'>
              {item.subText}
            </p>
            <div className='mt-auto pl-[30px] sm:pl-0'>
              <p className='w-[326px] text-[16px]'>{item.body}</p>
            </div>
          </div>
          <div className='w-[780px]'>
            {item.awards.map((item, number: number) => (
              <div
                key={number}
                className='flex flex-wrap sm:flex-nowrap justify-between py-7 '
              >
                <Image
                  src={item.img}
                  className='h-[200px] sm:h-[176px] w-full sm:w-[322px]'
                />
                <div className='w-[400px] px-[30px]'>
                  <p className='text-[16px] mt-8 sm:mt-0 lato-bold'>
                    {item.title}
                  </p>
                  <ul className='list-disc flex flex-col mt-8 sm:mt-20  w-[315px] sm:w-full pl-5'>
                    {item?.points?.map((point, index) => (
                      <li key={index} className='text-[12px]'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AwardsFrimRanking;
