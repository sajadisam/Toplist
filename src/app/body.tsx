import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

function ServerCard({ logo, name, banner }: { logo: string, name: string, banner: string }) {
  return <div className="flex items-center py-1  bg-black bg-opacity-25 border-white border-opacity-10 border-[1px] px-5 justify-between rounded-md ">
    <div className="2md:flex hidden items-center gap-5 ">
      <div className="w-24 h-24 shrink-0 ">
        <img src={logo} alt={"server logo"} className="p-2" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-extrabold">{name}</h1>
        <div className="flex items-center gap-1  ">
          <FontAwesomeIcon color="rgb(250 204 21)" icon={faCoffee} height={18} width={18} className="shrink-0" />
          <span className="text-sm text-wrap px-2  text-yellow-400">Sponsored server</span>
        </div>
      </div>
    </div>
    <video src={banner} autoPlay={true} loop={true} className="shrink-0 p-2 h-20 2md:w-auto w-full" />
  </div>
}

export default function Body() {
  return <>
    <div className="flex flex-col items-center w-full  h-full py-10 ">
      <div className="flex flex-col items-center w-full max-w-[1200px] h-full py-10 ">
        <div className="flex flex-col gap-3 bg-primary justify-center h-full py-8 px-10 rounded-md  w-full">
          <ServerCard logo="/server_gif_logo.gif" name="Mythical" banner="/banner.mp4" />
          <ServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
          <ServerCard logo="/server_logo.png" name="Mythical" banner="/banner.mp4" />
          <ServerCard logo="/server_logo.png" name="Redemption RSPS Redemption RSPS" banner="/banner.mp4" />
        </div>
      </div>
    </div>
  </>;
}
