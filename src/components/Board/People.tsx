import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { board, tabs } from "../../dummyData/People/Peope";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Peoples() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='bg-[#252525] py-6 px-4 sm:pt-[60px] sm:pb-[60px] sm:pl-[49px] sm:pr-[49px]'>
      <Tabs onChange={(index) => setActiveIndex(index)}>
        <TabList
          sx={{
            borderBottom: "none",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            overflowX: { base: "auto", md: "visible" },
            display: { base: "flex", md: "grid" },
            gridTemplateColumns: { md: "repeat(6, 1fr)" },
            gap: { md: 12 },
            pb: { base: 2, md: 0 },
            px: { base: 4, sm: 6, md: 0 },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              _selected={{
                borderBottom: "2px solid white",
                fontFamily: "lato-regular",
                color: "white",
              }}
              _focus={{ boxShadow: "none" }}
              _hover={{ backgroundColor: "transparent" }}
              className='flex-shrink-0 '
            >
              <Text
                className={`text-[#FCFCFC] text-lg sm:text-[34px] ${
                  activeIndex === index ? "lato-bold" : "lato-thin"
                }`}
              >
                {tab.head}
              </Text>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={tab.id}>
              {index === 0 || index === 1 ? (
                <div>
                  <div className='grid grid-cols-1 m-auto sm:gap-14 sm:grid-cols-3  mt-8 sm:mt-16 justify-center'>
                    {board.map((item) => (
                      <Link
                        to={`/person/${item.id}`}
                        className='no-underline'
                        key={item.id}
                      >
                        <Box
                          sx={{
                            width: ["100%", "auto"],
                            height: "var(--chakra-sizes-sm)",
                            "@media (min-width: 640px)": {
                              width: "auto",
                            },
                          }}
                          boxSize='sm'
                          className='relative group '
                        >
                          <Image
                            src={item.image}
                            className=' h-[329px] sm:h-[329px] w-[219px] sm:w-[219px] rounded-lg filter grayscale hover:filter-none transition duration-300 cursor-pointer'
                            alt={item.title}
                          />
                          <div className='absolute bottom-[290px] sm:bottom-0 left-24   right-0   p-4 sm:bg-transparent sm:p-0 sm:top-0 sm:left-[201px] sm:w-[219px]'>
                            <Text className='text-white text-base sm:text-[18px] lato-regular text-hover group-hover:text-[24px]  transition duration-300 ease-in-out'>
                              {item.name}
                            </Text>

                            <span className='text-white text-[14px] sm:text-sm lato-bold block mt-2'>
                              {item.title}
                            </span>
                            <span className='text-white text-[14px] sm:text-sm lato-bold'>
                              {item.group}
                            </span>
                          </div>
                        </Box>
                      </Link>
                    ))}
                  </div>
                  <div className='flex justify-center mt-12 sm:mt-28'>
                    <button className='lato-bold rounded-lg w-full sm:w-[350px] bg-white py-3 sm:py-[17px] px-4 sm:px-[30px]'>
                      Load More
                    </button>
                  </div>
                </div>
              ) : (
                <p>{tab.text || "Content here!"}</p>
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Outlet />
    </div>
  );
}

export default Peoples;
