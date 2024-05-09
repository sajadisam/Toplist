import Image from "next/image";
import Header, { HeaderLink } from "../components/header";
import Body from "./body";
import links from "@/data/links"

export default function Home() {
  return (
    <>
      <div className="pattern">
        <Header logo="/logo.png" links={links} />
        <Body />
      </div>
    </>
  );
}
