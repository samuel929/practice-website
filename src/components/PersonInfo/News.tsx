import { Card, CardBody, CardFooter, Stack, Image } from "@chakra-ui/react";
import { newsType } from "../../types/types";

interface INews {
  item: newsType;
}

function News({ item }: INews) {
  return (
    <div className='flex items-center justify-center  py-10 sm:py-0'>
      <Card width={410} paddingBottom={20}>
        <Image
          src={item.img}
          objectFit='cover'
          height={252}
          width={410}
          alt='Green double couch with wooden legs'
        />
        <CardBody>
          <Stack mt='6' spacing='3'>
            <p className='lato-regular text-[20px] w-[308px] h-[72px]'>
              {item.title}
            </p>
            <p className='lato-regular h-[68px] mt-4 leading-5 text-[14px]'>
              {item.body}
            </p>
            <p className='text-[12px] text-[#252525] mt-8 h-[14px] lato-light'>
              {item.date}
            </p>
          </Stack>
        </CardBody>
        <CardFooter className='grid grid-cols-3 gap-2 '>
          {item.badges.map((item: string) => (
            <div className='py-[12px] px-[20px]  h-[38px] border-2 flex items-center bg-[#0D152A1A] border-[#0d152a]  rounded-[12px]'>
              <p className='text-[#0D152A] font-lato text-[12px] '>{item}</p>
            </div>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}

export default News;
