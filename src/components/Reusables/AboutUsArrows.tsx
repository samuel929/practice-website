import { FaArrowRight } from "react-icons/fa";
import { ABoutUsArrows } from "../../dummyData/PracticeAreas/PracticeAreas";

interface TProps {
  location: string;
}

function AboutUsArrows({ location }: TProps) {
  return (
    <div className=''>
      <p className='text-[34px] lato-light'>About Us</p>
      <div>
        {ABoutUsArrows.filter((item) =>
          location === "/practice"
            ? item.id <= 3
            : location === "/about"
            ? item.id > 3
            : null
        ).map((item) => (
          <div key={item.id} className='block sm:flex justify-between pt-44'>
            <p className='text-[20px] lato-regular'>{item.text}</p>
            <div className='w-full sm:w-[686px] pr-8 pt-10  lato-regular'>
              <p className='text-[14px] sm:text-[16px]'>{item.body}</p>
              <div
                className={`flex justify-end pt-14 pr-2 ${
                  location === "/about" ? "lg:hidden" : null
                }`}
              >
                <FaArrowRight />
              </div>
              <hr className='bg-[#74B3BB] mt-10' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsArrows;
