"use client";
import Dropdown from "@/components/dropdown";
import SponsoredServerCard from "@/components/sponsored_card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Spacer({ className }: { className: string | null }) {
  return <div className={`bg-white w-full h-[1px] bg-opacity-15 ${className}`} />

}

interface ServerCardProps {
  index: number,
  name: string,
  tags?: string[],
  players?: number,
  description?: string,
  video?: string,
  votes?: number,
}

function ServerCard({ index, name, tags, players, description, video, votes }: ServerCardProps) {
  return <>
    <div className="bg-black bg-opacity-40 px-7 rounded-lg">
      <div className="flex flex-col items-start sm:items-center sm:flex-row my-5  gap-4">
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-gray-800 rounded-md text-lg ">
            {index}
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="font-bold text-xl">
              {name}
            </span>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faStar} color={"gray"} />
              <span className="text-sm">5.0</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:ml-auto">
          {tags && tags.length > 0 &&
            tags.map((tag) => (
              <div className="px-5 py-2 bg-gray-800 bg-opacity-60 text-red-500 rounded-md text-sm font-medium">
                {tag}
              </div>
            ))
          }
        </div>
      </div>
      <Spacer className={"my-1"} />

      <div className="flex items-center justify-between py-6">
        <img src={"/server_logo.png"} alt={"server logo"} className="sm:block hidden w-32 h-32 shrink-0 p-2" />
        <div className="flex flex-col items-center 2md:w-7/12 md:w-10/12 w-full  px-4">
          {
            video &&
            <video src={"/banner.mp4"} autoPlay={true} loop={true} className="p-2 w-full" />
          }
          {description &&
            <div className="h-24 w-full my-2 bg-gray-950 py-2 px-4 rounded-sm overflow-y-auto">
              <p className="text-sm">{description}</p>
            </div>
          }
        </div>
        <div className={"flex flex-col gap-1"}>
          {
            votes &&
            <h1 className="2md:block hidden text-2xl font-bold text-center">{votes} votes</h1>
          }
          {
            players &&
            <div className="flex gap-1.5 items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <h1 className="2md:block hidden text-sm text-center text-gray-600">{players} players online</h1>
            </div>
          }
        </div>
      </div>

    </div>
  </>;
}


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
              <ServerCard index={index + 1} name="Mythical" votes={5} players={120} tags={["RS2", "ECO"]} video="/banner.mp4" description="The CErver is an OSRS server that aims to create an enjoyable experience but wants to reward grinds as much as possible. We aim to create a fun, safe, and social community for players to enjoy and shape the server based on community feedback. Make your voice heard, join The CErver today!" />
            ))
          }
        </div>
      </div>
    </div>
  </>;
}

