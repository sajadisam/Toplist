import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

function ServerCard({ logo, name, banner }: { logo: string, name: string, banner: string }) {
  return <div className="flex flex-wrap h-24 bg-black bg-opacity-25 border-white border-opacity-10 border-[1px] px-5 justify-between rounded-md ">
    <div className="flex items-center gap-5 h-full">
      <img src={logo} alt={"server logo"} className="max-h-full max-w-full p-2" />
      <div className="flex flex-col gap-1 bg-red-500 ">
        <h1 className="text-xl font-extrabold">{name}</h1>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon color="rgb(250 204 21)" icon={faCoffee} height={18} width={18} />
          <span className="text-sm text-wrap px-2 text-yellow-400">Sponsored server</span>
        </div>
      </div>
    </div>
    <video src={banner} autoPlay={true} loop={true} />
  </div>
}

export default function Body() {
  return <>
    <div className="flex flex-col items-center w-full h-full py-10 ">
      <div className="flex flex-col gap-3 bg-primary justify-center h-full py-8 px-10 rounded-md">
        <ServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
        <ServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
        <ServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
        <ServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
      </div>
    </div>
  </>;
}
