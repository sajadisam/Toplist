import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="flex h-16 gap-5 py-2 px-10 items-center bg-[#1a1514] sticky top-0">
      <a href="." className="shrink-0">
        <Image src={logo} alt="logo" width={150} height={40} className="p-2" />
      </a>
      <div className="flex w-full h-full">
        {links.map((link, index) =>
        (<a key={index} href={link.link} className="flex items-center gap-1.5 px-2.5 h-full hover:text-red-500">
          <FontAwesomeIcon icon={link.icon} color="red" width={12} height={12} />
          <span className="text-xs ">{link.name}</span>
        </a>
        ))}
      </div>
      {/* <button className="bg-red-400 bg-opacity-30 px-4 py-2 text-sm">Login</button> */}
    </div>
  </>;
}
