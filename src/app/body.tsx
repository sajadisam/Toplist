"use client";
import Dropdown from "@/components/dropdown";
import SponsoredServerCard from "@/components/sponsored_card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Spacer({ className }: { className: string | null }) {
  return <div className={`bg-white w-full h-[1px] bg-opacity-15 ${className}`} />

}

function ServerCard({ index, name }: { index: number, name: string }) {
  return <>
    <div className="bg-black bg-opacity-40 px-7 rounded-lg">
      <div className="flex items-center my-5  gap-4">
        <div className="px-4 py-2 bg-gray-800 rounded-md text-lg ">
          {index}
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-between gap-3">
            <span className="font-bold text-xl">
              {name}
            </span>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faStar} color={"gray"} />
              <span className="text-sm">5.0</span>
            </div>
          </div>

          {/* <div className="px-6 py-1.5 border-red-600 border-2 rounded-full"> */}
          <div className="px-5 py-2 bg-gray-800 bg-opacity-60 text-red-500 rounded-md text-sm font-medium">
            Tag
          </div>
        </div>
      </div>
      <Spacer className={"my-1"} />

      <div className="flex items-center justify-between px-10 py-6">
        <img src={"/server_logo.png"} alt={"server logo"} className="w-32 h-32 shrink-0 p-2" />
        <div className="flex flex-col items-center w-8/12 px-4">
          <video src={"/banner.mp4"} autoPlay={true} loop={true} className="p-2 h-20" />
          <div className="h-24 my-3 bg-gray-950 py-2 px-4 rounded-sm overflow-y-auto">
            <p className="text-sm">The CErver is an OSRS server that aims to create an enjoyable experience but wants to reward grinds as much as possible. We aim to create a fun, safe, and social community for players to enjoy and shape the server based on community feedback. Make your voice heard, join The CErver today!</p>
          </div>
        </div>
        <h1 className="text-2xl font-bold">2 votes</h1>
      </div>

    </div>
  </>;
}


export default function Body() {
  return <>
    <div className="flex flex-col items-center w-full  h-full py-10 ">
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

          <ServerCard index={1} name="Mythical" />
          <ServerCard index={2} name="Mythical" />
          <ServerCard index={3} name="Mythical" />
          <ServerCard index={4} name="Mythical" />
        </div>
      </div>
    </div>
  </>;
}

