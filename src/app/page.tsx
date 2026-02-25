import Header from "../components/header";
import links from "@/data/links"
import BodyWrapper from "@/components/body";
import SponsoredServerCard from "@/components/sponsored_card";
import Dropdown from "@/components/dropdown";
import ServerCard from "@/components/server_card";
import 'react-responsive-pagination/themes/classic.css';
import Pagination from "@/components/pagination";
import { get_max_pages, get_page } from "@/backend/servers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Runesuite",
  description: "RSPS toplist",
  icons: {
    icon: "/favicon.png"
  },
};

export default async function Page({ searchParams }: { searchParams: { page?: string } }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const data = await get_page(page);
  const max = await get_max_pages();

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
                (data.map((server, index) => (
                  <ServerCard key={index} index={index + 1} name={server.name} logo={server.image} votes={server.vote_count} players={Math.round(server.vote_count / 12)} tags={["RS2", "ECO"]} video={server.banner} description={server.description} />
                )))
              }
            </div>
            <Pagination currentPage={page} maxPages={max} setCurrentPage={async (page) => {
              "use server";
              redirect(`?page=${page}`);
            }}
            />
          </div>
        </BodyWrapper>
      </div>
    </>

  );
}
