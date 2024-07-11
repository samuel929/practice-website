import { IoSearchSharp } from "react-icons/io5";
import MyResponsiveChoroplethCanvas from "../../components/map/MyResponsiveChoroplethCanvas";
import FindOutMore from "../../components/Reusables/FindOutMore";
import GetInTouch from "../../components/Reusables/GetInTouch";
import { PracticeAreasHeader } from "../../dummyData/PracticeAreas/PracticeAreas";
import { Image } from "@chakra-ui/react";
function IpAfrica() {
  return (
    <div>
      <div>
        {PracticeAreasHeader.map((item, index: number) => (
          <div key={index}>
            <p className='lato-light w-[257px] sm:w-full text-[24px] sm:text-[60px] pl-11 pt-20 pb-10'>
              Awards & Rankings
            </p>

            <div className='pt-12 pb-56'>
              <Image src={item.image} className='w-full' />
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center flex-wrap sm:grid grid-cols-3 gap-3 sm:pr-10  pb-20'>
        <div></div>
        <div>
          <p className='w-[315px] sm:w-[426px] text-[14px] sm:text-[16px] lato-regular'>
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
        <div>
          <p className='w-[315px] sm:w-[426px] text-[14px] sm:text-[16px] lato-regular'>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
            non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
            sem condimentum ullamcorper quis venenatis nisi. Proin vitae
            facilisis nisi, ac posuere leo.
          </p>
        </div>
      </div>
      <div>
        <div className='flex justify-center flex-wrap'>
          <div className='mr-5'>
            {" "}
            <input
              type='text'
              title='Search'
              className='py-[6px] px-[20px] w-full border-[#1F394C] border-2 rounded-[4px] placeholder:text-[20px] placeholder:text-[#252525] placeholder:lato-regular'
              placeholder='Search...'
            />
            <IoSearchSharp size={20} className='relative bottom-7 left-44' />
          </div>
          <div className='mr-5'>
            {" "}
            <input
              type='text'
              title='Search'
              className='py-[6px] px-[20px] w-full border-[#1F394C] border-2 rounded-[4px] placeholder:text-[20px] placeholder:text-[#252525] placeholder:lato-regular'
              placeholder='Search...'
            />
          </div>
          <div className='mr-5'>
            {" "}
            <input
              type='text'
              title='Search'
              className='py-[6px] px-[20px] w-full border-[#1F394C] border-2 rounded-[4px] placeholder:text-[20px] placeholder:text-[#252525] placeholder:lato-regular'
              placeholder='Search...'
            />
          </div>
          <div>
            {" "}
            <input
              type='text'
              title='Search'
              className='py-[6px] px-[20px] w-full border-[#1F394C] border-2 rounded-[4px] placeholder:text-[20px] placeholder:text-[#252525] placeholder:lato-regular'
              placeholder='Search...'
            />
          </div>
        </div>
        <MyResponsiveChoroplethCanvas />
      </div>

      <div className='my-36'>
        <GetInTouch />
      </div>

      <div className='my-36'>
        <FindOutMore />
      </div>
    </div>
  );
}

export default IpAfrica;
