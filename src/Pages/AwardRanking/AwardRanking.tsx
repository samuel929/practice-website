import { Link } from "react-router-dom";
import ProudMembers from "../../components/PersonInfo/ProudMembers";
import { PracticeAreasHeader } from "../../dummyData/PracticeAreas/PracticeAreas";
import { Breadcrumb, BreadcrumbItem, Image } from "@chakra-ui/react";
function AwardRanking() {
  return (
    <div>
      <div className='pl-0 sm:pl-11 pt-28'>
        <Breadcrumb>
          <BreadcrumbItem className='pl-6 sm:pl-0'>
            <Link
              className='lato-regular text-[16px] text-[#252525]'
              to='/about'
            >
              About
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link className='lato-regular text-[16px] text-[#252525]' to={``}>
              Awards & Rankings
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        {PracticeAreasHeader.map((item, index: number) => (
          <div key={index}>
            <p className='lato-light w-[196px] sm:w-[498px] text-[24px] sm:text-[60px] pl-11 pt-20 pb-10'>
              {item.title}
            </p>
            <div className='flex pl-11 sm:justify-end sm:pr-10'>
              <p className='w-[315px] sm:w-[426px] text-[14px]'>
                {item.subText}
              </p>
            </div>
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
      <div className='pb-32'>
        <ProudMembers />
      </div>
    </div>
  );
}

export default AwardRanking;
