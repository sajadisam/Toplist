import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

export default function Dropdown({ options }: { options: string[] }) {
  return <>
    <Menu>
      <MenuButton>
        <button type={"button"} className="flex text-white items-center py-1 px-4 bg-white bg-opacity-10 text-s border-none gap-2 !rounded-sm">
          <span>Sort</span>
          <FontAwesomeIcon icon={faChevronDown} aria-haspopup="true" aria-controls="dropdown-menu5" width={15} />
        </button>
      </MenuButton>
      <MenuItems anchor="bottom" className={"flex flex-col bg-zinc-800 mt-2 rounded-sm  gap-2 data-[focus]:bg-blue-100"}>
        {
          options.map((option, index) =>
            <MenuItem key={index}>
              <button className="data-[focus]:bg-zinc-700 px-4 py-1.5 text-sm ">
                {option}
              </button>
            </MenuItem>
          )
        }
      </MenuItems>
    </Menu>
  </>;
}
