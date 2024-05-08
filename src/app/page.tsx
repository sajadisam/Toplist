import Image from "next/image";
import Header, { HeaderLink } from "../components/header";
import { faDollar, faLink, faUserFriends, faUserShield, faAward } from "@fortawesome/free-solid-svg-icons"
import Body from "./body";

export default function Home() {
  let links: HeaderLink[] = [{
    name: "Store",
    icon: faDollar,
    link: "./",
  },
  {
    name: "Toplist",
    icon: faLink,
    link: "./",
  },
  {
    name: "MarketPlace",
    icon: faLink,
    link: "./",
  },
  {
    name: "Clubs",
    icon: faUserFriends,
    link: "./",
  },
  {
    name: "Staff",
    icon: faUserShield,
    link: "./",
  },
  {
    name: "LeaderBoard",
    icon: faAward,
    link: "./",
  },
  {
    name: "Discord",
    icon: faAward,
    link: "./",
  },
  ];



  return (
    <>
      <div className="pattern">
        <Header logo="/logo.png" links={links} />
        <Body />
      </div>
    </>
  );
}
