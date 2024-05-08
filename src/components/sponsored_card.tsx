import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons"

export default function SponsoredServerCard({ logo, name, banner }: { logo: string, name: string, banner: string }) {
  return <div className="flex items-center py-1  bg-black bg-opacity-15 border-white border-opacity-[5%] border-[1px] px-5 justify-between rounded-md hover:bg-white hover:bg-opacity-[2%]">
    <div className="2md:flex hidden items-center gap-5 ">
      <div className="w-20 h-20 shrink-0 ">
        <img src={logo} alt={"server logo"} className="p-2" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-extrabold">{name}</h1>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon color="rgb(250 204 21)" icon={faAward} height={18} width={18} className="shrink-0" />
          <span className="text-sm text-wrap text-yellow-400">Sponsored server</span>
        </div>
      </div>
    </div>
    <video src={banner} autoPlay={true} loop={true} className="shrink-0 p-2 h-20 2md:w-auto w-full" />
  </div>
}
