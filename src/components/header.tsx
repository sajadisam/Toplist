import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export interface HeaderLink {
  name: string,
  icon: IconProp,
  link: string,
}

interface HeaderProps {
  logo: string,
  links: HeaderLink[],
}

export default function Header({ logo, links }: HeaderProps) {
  return <>
    <div className="flex h-16 gap-5 py-2 px-10 items-center bg-primary sticky top-0">
      <a href="." className="shrink-0">
        <Image src={logo} alt="logo" width={150} height={40} className="p-2" />
      </a>

      <div className="2md:flex hidden w-full h-full">
        {links.map((link, index) =>
        (<a key={index} href={link.link} className="flex items-center gap-1.5 px-2.5 h-full hover:text-red-500">
          <FontAwesomeIcon icon={link.icon} color="red" width={12} height={12} />
          <span className="text-xs ">{link.name}</span>
        </a>
        ))}
      </div>

      <div className="block 2md:hidden ml-auto">
        <Menu>
          <MenuButton>
            <button className="px-3 py-2">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </MenuButton>

          <MenuItems anchor={"bottom end"} className={"bg-zinc-800 py-2"}>
            {links.map((link, index) =>
            (
              <MenuItem key={index}>
                <a key={index} href={link.link} className="flex items-center gap-1.5 px-4 h-full hover:text-red-500 py-2 hover:bg-zinc-700">
                  <FontAwesomeIcon icon={link.icon} color="red" width={12} height={12} />
                  <span className="text-xs ">{link.name}</span>
                </a>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
      {/* <button className="bg-red-400 bg-opacity-30 px-4 py-2 text-sm">Login</button> */}
    </div>
  </>;
}
