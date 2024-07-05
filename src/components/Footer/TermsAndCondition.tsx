import { Text } from "@chakra-ui/react";

function TermsAndCondition() {
  return (
    <div className='flex justify-start sm:justify-center'>
      <div className='flex flex-wrap sm:flex-nowrap justify-between sm:justify-start w-[389px]'>
        <Text className='text-xs lato-light text-secondaryColor w-full mb-2 sm:mb-0'>
          All rights reserved
        </Text>
        <Text className='text-xs lato-light text-secondaryColor w-full'>
          Copyright 2001-2023 Adams&Adams
        </Text>
      </div>
    </div>
  );
}

export default TermsAndCondition;
