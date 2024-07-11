import { NavLink, useLocation } from "react-router-dom";
import { Img, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type NavItems = {
  to: string;
  label: string;
};
interface IProps {
  handleMouseLeave: () => void;
  handleMouseEnter: (b: string) => void;
  navItems: NavItems[];
  navLoginItems: NavItems[];
}

function Navbar({
  handleMouseEnter,
  handleMouseLeave,
  navItems,
  navLoginItems,
}: IProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const location = useLocation();

  return (
    <div className='shadow-custom'>
      <nav className='flex items-center justify-between px-4 py-2 md:px-8'>
        <ul className='flex items-center'>
          <li className='mr-4'>
            <NavLink to='/'>
              <Img
                boxSize='100px'
                height={70}
                width={71}
                objectFit='cover'
                alt='logo'
                src={Logo}
              />
            </NavLink>
          </li>
          <li className='hidden lg:block'>
            <div className='grid gap-4 grid-cols-5 text-center'>
              {navItems.map((item) => (
                <NavLink
                  onMouseEnter={() => handleMouseEnter(item.to)}
                  onMouseLeave={() => handleMouseLeave()}
                  key={item.to}
                  to={item.to}
                >
                  <Text className='font-lato'>{item.label}</Text>
                  <div
                    className={`font-lato ${
                      location.pathname === item.to
                        ? " border-[#74B3BB] w-[68px] h-[6px] bg-[#74B3BB] rounded-tr-[30px] rounded-tl-[30px] relative top-7 left-4"
                        : ""
                    }`}
                  ></div>
                </NavLink>
              ))}
            </div>
          </li>
        </ul>
        <ul
          className={`hidden lg:flex ${
            showInput ? "w-[714px]" : "w-48"
          } justify-between items-center`}
        >
          {showInput
            ? null
            : navLoginItems.map((item) => (
                <NavLink key={item.to} to={item.to} className='font-lato'>
                  {item.label}
                </NavLink>
              ))}
          {showInput ? (
            <>
              <input
                type='text'
                title='Search'
                className='py-[6px] px-[20px] w-[714px] border-[#1F394C] border-2 rounded-[4px] placeholder:text-[20px] placeholder:text-[#252525] placeholder:lato-regular'
                placeholder='Search...'
              />
              <IoClose
                size={20}
                className='cursor-pointer relative right-8'
                onClick={() => setShowInput(false)}
              />
            </>
          ) : (
            <li className='cursor-pointer'>
              <IoSearchSharp size={20} onClick={() => setShowInput(true)} />
            </li>
          )}
        </ul>
        <div className='flex items-center lg:hidden'>
          <IoSearchSharp size={20} className='mr-4' />
          <GiHamburgerMenu size={24} onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </nav>
      {menuOpen && (
        <div className='lg:hidden bg-white w-full'>
          <ul className='flex flex-col items-center'>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                <Text className='font-lato py-2'>{item.label}</Text>
              </NavLink>
            ))}
            {navLoginItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                <Text className='font-lato py-2'>{item.label}</Text>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
