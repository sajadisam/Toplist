import type { Metadata } from "next";
import Header from "../components/header";
import links from "@/data/links"
import BodyWrapper from "@/components/body";
import SponsoredServerCard from "@/components/sponsored_card";
import Dropdown from "@/components/dropdown";
import ServerCard from "@/components/server_card";
import 'react-responsive-pagination/themes/classic.css';
import Pagination from "@/components/pagination";

export const metadata: Metadata = {
  title: "Runesuite",
  description: "RSPS toplist",
  icons: {
    icon: "/favicon.png"
  }
};

export default function Home() {
  return (
    <>
      <div className="pattern">
        <Header logo="/logo.png" links={links} />
        <BodyWrapper>
          <div>
            <SponsoredServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
            <SponsoredServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
            <SponsoredServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
            <SponsoredServerCard logo="/server_logo.png" name="Redemption RSPS" banner="/banner.mp4" />
          </div>
          <div>
            <div className="flex flex-col justify-center gap-5">
              <div className="flex items-center justify-between mb-4">
                <h1 className="font-extrabold text-2xl">Top Voted Servers</h1>
                <Dropdown options={["Top Voted", "Highest Rated", "Most Reviewed", "Newest"]} />
              </div>
              {
                (Array(10).fill(0)).map((_, index) => (
                  <ServerCard key={index} index={index + 1} name="Mythical" votes={5} players={120} tags={["RS2", "ECO"]} video="/banner.mp4" description="The CErver is an OSRS server that aims to create an enjoyable experience but wants to reward grinds as much as possible. We aim to create a fun, safe, and social community for players to enjoy and shape the server based on community feedback. Make your voice heard, join The CErver today!" />
                ))
              }
            </div>
            <Pagination />
          </div>
        </BodyWrapper>
      </div>
    </>
  );
}
