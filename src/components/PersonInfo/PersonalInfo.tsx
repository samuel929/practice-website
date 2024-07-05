import { Box, Image } from "@chakra-ui/react";
import { Board } from "../../types/types";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface IPerson {
  person?: Board;
}
function PersonalInfo({ person }: IPerson) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='block sm:flex flex-wrap justify-between mt-14'>
      <div>
        <div>
          <Image
            src={person?.image}
            className='rounded-lg h-[458px] w-full sm:w-[431px] bg-contain bg-center '
            alt='Profile Picture'
          />
        </div>
        <div className='mt-10 pl-7 pr-7 sm:pl-0 sm:pr-0'>
          <div>
            <div className='block sm:grid sm:grid-cols-2 gap-0 py-2 w-[340px]'>
              <span className='lato-bold w-[105px] col-span-1'>Phone</span>
              <span className='lato-regular block sm:col-span-1'>
                082-484-8069
              </span>
            </div>
            <div className='block sm:grid sm:grid-cols-2 gap-0 py-2 w-[340px]'>
              <span className='lato-bold w-[105px]'>Email Address</span>
              <span className='lato-regular block  sm:col-span-1  w-full sm:w-80'>
                Dereck.Waelchi31@Adams.africa
              </span>
            </div>
            <div className='block sm:grid sm:grid-cols-2 gap-0 py-2 w-[340px]'>
              <span className='lato-bold w-[105px]'>Location</span>
              <span className='lato-regular block sm:col-span-1'>
                Pretoria, South Africa
              </span>
            </div>
          </div>
          <div className='flex justify-between pt-11  pb-11 sm:pb-0'>
            <p className='text-[#1F394C] lato-bold text-[14px]'>Contact Card</p>
            <p className='text-[#1F394C] lato-bold text-[14px]'>LinkedIn</p>
            <p className='text-[#1F394C] lato-bold text-[14px]'>Twitter</p>
            <p className='text-[#1F394C] lato-bold text-[14px]'>Facebook</p>
          </div>
        </div>
      </div>
      <div className='bg-[#1f394c] text-white pl-7 pr-7 sm:pl-20 sm:pr-20 pt-12 rounded-lg w-full sm:w-[900px]'>
        <h2 className='lato-bold text-[34px]'>Bob Mertz</h2>
        <div className='mb-4 mt-6'>
          <h3 className='lato-regular text-[18px]'>About</h3>
          <p className='text-[18px] h-[95px] mt-4 lato-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
          <p className='text-white lato-bold h-[16px] py-10 mt-44 sm:mt-5'>
            Read More
          </p>
        </div>
        <div className='mt-0 sm:mt-2 pb-24 sm:pb-24'>
          <Accordion
            defaultIndex={openIndex !== null ? [openIndex] : undefined}
            allowMultiple
          >
            <AccordionItem sx={{ "&:first-of-type": { borderTop: "none" } }}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      sx={{
                        height: "81px",
                        paddingLeft: "0",
                        paddingRight: "0",
                      }}
                      onClick={() => handleToggle(0)}
                    >
                      <Box
                        as='span'
                        flex='1'
                        className='lato-regular text-[18px]'
                        textAlign='left'
                      >
                        Areas Of Specialisation
                      </Box>
                      {isExpanded ? <MinusIcon /> : <AddIcon />}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className='lato-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      sx={{
                        height: "81px",
                        paddingLeft: "0",
                        paddingRight: "0",
                      }}
                      onClick={() => handleToggle(1)}
                    >
                      <Box
                        as='span'
                        className='lato-regular text-[18px]'
                        flex='1'
                        textAlign='left'
                      >
                        Qualifications & Credentials
                      </Box>
                      {isExpanded ? <MinusIcon /> : <AddIcon />}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className='lato-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
