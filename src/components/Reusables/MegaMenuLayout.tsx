import { PracticeArea } from "../../dummyData/MegaMenu/MegaMenu";
import { AboutMegaMenu } from "../../dummyData/MegaMenu/MegaMenuAbout";
import { MegaMenuIP } from "../../dummyData/MegaMenu/MegaMenuIP";
import MegaMenuLayoutPractice from "./MegaMenuLayoutPractice";
import MenuItemsLayout from "./MenuItemsLayout";

interface IMegaMenuProps {
  path: string;
}

function MegaMenuLayout({ path }: IMegaMenuProps) {
  return (
    <div className='w-full h-[299px] pt-[27px] px-[60px] pb-[48px] bg-white hidden sm:block'>
      {path === "/practice" ? (
        <MegaMenuLayoutPractice practiceAreaItems={PracticeArea} />
      ) : (
        <MenuItemsLayout
          path={path}
          IpItems={MegaMenuIP}
          items={AboutMegaMenu}
        />
      )}
    </div>
  );
}

export default MegaMenuLayout;
