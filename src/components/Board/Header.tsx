import { IoSearchSharp } from "react-icons/io5";
import { PiCaretRightBold } from "react-icons/pi";
import { RiCloseLine } from "react-icons/ri";

function Header() {
  const options = [
    { value: "practice-areas", label: "Practice Areas" },
    { value: "location", label: "Location" },
  ];
  return (
    <div className='px-0 sm:px-[60px] py-8 sm:py-[90px]'>
      <p className='font-light text-[24px]  px-[40px] sm:px-0 sm:text-[60px] lato-light'>
        Our People
      </p>

      <div className='flex flex-col mt-8 sm:mt-28'>
        <div className='relative w-full'>
          <input
            type='text'
            placeholder='Search...'
            className='w-full h-12 sm:h-[60px] rounded placeholder:lato-regular pl-6 placeholder:text-lg sm:placeholder:text-xl placeholder:text-black outline-black border-black border-solid border'
          />

          <IoSearchSharp
            size={20}
            className='hidden sm:block  absolute right-4 top-1/2 transform -translate-y-1/2'
          />
          <RiCloseLine
            size={20}
            className='block sm:hidden  absolute right-4 top-1/2 transform -translate-y-1/2'
          />
        </div>

        <div className='flex flex-row w-full sm:flex-row md:w-[870px] sm:w-[870px] justify-between mt-4'>
          <div className='relative w-[187px] sm:w-[420px] my-2'>
            <select
              title='Practice Area'
              className='block appearance-none md:w-[430px] custom-select h-[60px] rounded w-full sm:w-[420px] p-3 sm:p-[18px_20px_18px_20px] text-base sm:text-xl placeholder:text-black outline-black border-black border-solid border'
            >
              <option disabled selected className='lato-regular'>
                Practice Areas
              </option>
              {options.map((option, index) => (
                <option
                  key={index}
                  value={option.value}
                  className='lato-regular'
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className='hidden sm:flex absolute inset-y-0 right-0 items-center px-2 text-gray-700'>
              <PiCaretRightBold />
            </div>
          </div>

          <div className='relative w-[187px] sm:w-[420px] my-2'>
            <select
              title='Location'
              className='block appearance-none w-full md:w-[430px] h-[60px] custom-select rounded w-full sm:w-[420px] p-3 sm:p-[18px_20px_18px_20px] text-base sm:text-xl placeholder:text-black outline-black border-black border-solid border'
            >
              <option disabled selected>
                Location
              </option>
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className='hidden sm:flex absolute inset-y-0 right-0 items-center px-2 text-gray-700'>
              <PiCaretRightBold />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
