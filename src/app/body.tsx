"use client";
import Dropdown from "@/components/dropdown";
import SponsoredServerCard from "@/components/sponsored_card";
import ServerCard from "@/components/server_card";




export default function Body() {
  return <>
    <div className="flex flex-col items-center w-full  h-full py-10">
      <div className="flex flex-col items-center w-full max-w-[1200px] h-full py-4 gap-5  ">
        <div className="flex flex-col gap-3 bg-primary justify-center h-full py-8 px-10 rounded-sm  w-full">
          <SponsoredServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
          <SponsoredServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
          <SponsoredServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
          <SponsoredServerCard logo="/server_logo.png" name="Redemption RSPS" banner="/banner.mp4" />
        </div>
        <div className="flex flex-col gap-3 bg-primary justify-center h-full py-8 px-10 rounded-sm  w-full">
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
      </div>
    </div>
  </>;
}

