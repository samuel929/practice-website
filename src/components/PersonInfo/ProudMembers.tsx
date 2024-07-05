import { Image } from "@chakra-ui/react";
import { ProudMemberMockData } from "../../dummyData/awards/ProudMembers";
import { awardsType } from "../../types/types";

function ProudMembers() {
  return (
    <div className='pl-0 sm:pl-[30px] mt-32 pr-0 sm:pr-[230px]'>
      <p className='lato-regular text-[24px] sm:text-[34px]'>
        Proud members of
      </p>
      <div className='overflow-x-auto  sm:hide-scrollbar'>
        <div className='grid grid-cols-5 gap-1 min-w-[950px] sm:min-w-0 pb-4 sm:pb-0'>
          {ProudMemberMockData.map((item: awardsType) => (
            <Image
              className='h-[58px] w-[182px] mt-16'
              src={item.img}
              key={item.id}
              alt={"Award logo"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProudMembers;
