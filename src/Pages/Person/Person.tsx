import { useParams } from "react-router-dom";
import { board, news } from "../../dummyData/People/Peope";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PersonalInfo from "../../components/PersonInfo/PersonalInfo";
import { Board, newsType } from "../../types/types";
import AwardsSlider from "../../components/PersonInfo/AwardsSlider";
import ProudMembers from "../../components/PersonInfo/ProudMembers";
import News from "../../components/PersonInfo/News";
function Person() {
  const { id } = useParams();
  const person: Board | undefined = board.find((item) => item.id === id);
  return (
    <div>
      <div className='pl-0 sm:pl-11 pt-28'>
        <Breadcrumb>
          <BreadcrumbItem className='pl-6 sm:pl-0'>
            <Link
              className='lato-regular text-[16px] text-[#252525]'
              to='/people'
            >
              People
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link
              className='lato-regular text-[16px] text-[#252525]'
              to={`/person/${id}`}
            >
              {person?.name}
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <div>
          <PersonalInfo person={person} />
        </div>

        <div className='py-80 pl-11 sm:pl-0'>
          <AwardsSlider />
          <ProudMembers />
        </div>
      </div>
      <div className=' bg-[#1F394C] p-0 sm:px-11   py-[52px] sm:py-[100px]'>
        <div className='flex items-center justify-start sm:justify-between  px-11 py-6'>
          <p className='lato-light text-[24px] sm:text-[34px] text-[#FCFCFC]'>
            Alexis Apostolidis News & Podcasts
          </p>
          <p className='lato-bold  hidden sm:block text-[#FCFCFC] text-[14px] cursor-pointer'>
            View all
          </p>
        </div>
        <div className='grid  grid-cols-1 sm:grid-cols-3 gap-3'>
          {news.map((item: newsType) => (
            <News item={item} />
          ))}
        </div>
        <div className='flex justify-center items-center sm:hidden'>
          <button className='pt-4 pb-4 pl-7 pr-7 bg-[#FCFCFC] rounded-lg w-[350px] h-[62px] text-[#1F394C] lato-bold'>
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Person;
