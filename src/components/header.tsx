// "use client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
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
    <div className="flex h-16 gap-5 py-2 px-10 items-center bg-primary sticky top-0 z-50">
      <a href="/" className="shrink-0">
        <img src={logo} alt="logo" width={150} height={40} className="p-2" />
      </a>

      <div className="2md:flex hidden w-full h-full">
        {links.map((link, index) =>
        (<a key={index} href={link.link} className="flex items-center gap-1.5 px-2.5 h-full hover:text-red-500">
          <FontAwesomeIcon icon={link.icon} color="red" className="w-3 h-3" />
          <span className="text-xs ">{link.name}</span>
        </a>
        ))}
      </div>

      <div className="block 2md:hidden ml-auto">
        <Menu>
          <MenuButton className="px-3 py-2">
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>

          <MenuItems anchor={"bottom end"} className={"bg-zinc-800 py-2"}>
            {links.map((link, index) =>
            (
              <MenuItem key={index}>
                <a key={index} href={link.link} className="flex items-center gap-1.5 px-4 h-full hover:text-red-500 py-2 hover:bg-zinc-700">
                  <FontAwesomeIcon icon={link.icon} color="red" className="w-3 h-3" />
                  <span className="text-xs ">{link.name}</span>
                </a>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </div>
  </>;
}
