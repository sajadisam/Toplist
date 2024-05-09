import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spacer from "@/components/spacer";

export interface ServerCardProps {
  index: number,
  name: string,
  tags?: string[],
  players?: number,
  description?: string,
  video?: string,
  votes?: number,
}

export default function ServerCard({ index, name, tags, players, description, video, votes }: ServerCardProps) {
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
            <div className="2md:flex hidden gap-1.5 items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <h1 className=" text-sm text-center text-gray-600">{players} players online</h1>
            </div>
          }
        </div>
      </div>

    </div>
  </>;
}
