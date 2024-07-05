import { Image } from "@chakra-ui/react";
import { Links } from "../../dummyData/FooterLinks/Footer";
import { FooterLinks } from "../../types/types";
import { useState } from "react";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";

function FooterLink() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number | null) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className='grid grid-cols-1 gap-0 sm:grid-cols-5 sm:gap-8'>
      {Links.map((item: FooterLinks, index: number) => (
        <div key={index} className='border-b sm:border-b-0'>
          <div
            className='flex justify-between items-center py-4 px-4 sm:px-0 sm:py-0 sm:justify-start cursor-pointer sm:cursor-default'
            onClick={() => toggleSection(index)}
          >
            <h1 className='text-[16px] text-[#252525] font-bold'>
              {item.title}
            </h1>
            <span className='sm:hidden text-xl'>
              {openSection === index ? <RxCaretDown /> : <RxCaretRight />}
            </span>
          </div>
          <ul
            className={`${
              openSection === index ? "block" : "hidden"
            } sm:block px-4 sm:px-0 pb-4 sm:pb-0 sm:pt-4`}
          >
            {item.text.map((text: string, subIndex: number) => (
              <li
                key={subIndex}
                className='text-[16px] text-[#252525] leading-8 sm:leading-10 cursor-pointer'
              >
                {text.includes("social.png") ? (
                  <Image src={text} alt='Social icon' />
                ) : (
                  text
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLink;
