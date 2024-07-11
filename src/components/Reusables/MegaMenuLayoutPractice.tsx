import { useState } from "react";
import { MegaMenu } from "../../types/types";

interface IProps {
  practiceAreaItems: MegaMenu[];
}
const MegaMenuLayoutPractice = ({ practiceAreaItems }: IProps) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<number | null>(
    null
  );

  return (
    <nav className='bg-gray-100'>
      <ul className='flex flex-col'>
        {practiceAreaItems.map((category, index: number) => (
          <li
            key={index}
            className='relative group'
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className='px-4 py-2 hover:bg-purple-200 cursor-pointer'>
              {category.Heading}
            </div>
            {activeCategory === index && (
              <ul className='grid grid-cols-5 gap-4'>
                {category.navItems.map((item, itemIndex: number) => (
                  <li
                    key={itemIndex}
                    className='relative group'
                    onMouseEnter={() => setActiveSubCategory(itemIndex)}
                    onMouseLeave={() => setActiveSubCategory(null)}
                  >
                    <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap'>
                      {item.title}
                    </div>
                    {activeSubCategory === itemIndex && (
                      <ul className='absolute left-full top-0 bg-white shadow-lg'>
                        {item.subMenu.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className='px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap'
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenuLayoutPractice;
