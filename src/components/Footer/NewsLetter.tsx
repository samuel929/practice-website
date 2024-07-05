import { Text } from "@chakra-ui/react";
import Adams from "../../assets/adams.png";
import { Image } from "@chakra-ui/react";

function NewsLetter() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center py-20 px-6 sm:px-[55px]'>
      <div className='hidden sm:block sm:flex-col sm:items-start sm:mr-6'>
        <Text className='text-base h-[39px] lato-bold mb-4'>
          Signup for our newsletter
        </Text>
        <input
          placeholder='Email Address'
          className='lato-regular placeholder:lato-regular pl-4 bg-customGray border-solid border-color outline-none border-[#B5C1C7] w-full sm:w-[340px] h-[51px] rounded-none border mb-4'
        />
      </div>
      <div>
        <Image className='w-[193px] md:w-auto' src={Adams} />
      </div>
    </div>
  );
}

export default NewsLetter;
