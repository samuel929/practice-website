import { NavLink, useLocation } from "react-router-dom";
import { Img, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/practice", label: "Practice Areas" },
    { to: "/ip-Africa", label: "IP Africa" },
    { to: "/people", label: "People" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const navLoginItems = [{ to: "/IP", label: "IP Connect Login" }];
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
                <NavLink key={item.to} to={item.to}>
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
        <ul className='hidden lg:flex w-48 justify-between items-center'>
          {navLoginItems.map((item) => (
            <NavLink key={item.to} to={item.to} className='font-lato'>
              {item.label}
            </NavLink>
          ))}
          <li>
            <IoSearchSharp size={20} />
          </li>
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
            <li className='py-2 hidden cursor-pointer sm:block'>
              <IoSearchSharp size={20} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
