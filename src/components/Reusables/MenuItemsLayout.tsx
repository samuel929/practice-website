import { MegaMenuAbout } from "../../types/types";

interface IMenuProps {
  items: MegaMenuAbout[];
  IpItems: MegaMenuAbout[];
  path: string;
}
function MenuItemsLayout({ items, path, IpItems }: IMenuProps) {
  const MegaMenuItems =
    path === "/about" ? items : path === "/ip-Africa" ? IpItems : [];
  return (
    <div
      className={`grid  ${
        path === "/about"
          ? "grid-cols-6"
          : path === "/ip-Africa"
          ? "grid-cols-5"
          : ""
      }  gap-6`}
    >
      {MegaMenuItems.map((item, index: number) => (
        <div key={index} className='w-[245px]'>
          <p className='text-[16px] lato-bold mb-10'>{item.title}</p>
          {item.subMenu.map((item, index: number) => (
            <ul key={index} className='mt-3 '>
              <li className='text-[14px] lato-regular'>{item}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MenuItemsLayout;
