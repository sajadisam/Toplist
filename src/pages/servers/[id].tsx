"use client";
import Header from "@/components/header";
import { useRouter } from "next/router";
import links from "@/data/links"
import BodyWrapper from "@/components/body";
import Spacer from "@/components/spacer";
import { faAdd, faCalendar, faGamepad, faGlobeAmericas, faRefresh, faStar, faVoteYea, faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import ScoreChart from "@/components/score_chart";
import DataTable from "@/components/data_table";
import Review from "@/components/pages/servers/review";


export default function ServerPage() {
  const router = useRouter();
  const serverId = router.query.id;

  return <>
    <Header logo="/logo.png" links={links} />
    <div className="py-0">
      <h1 className="text-center text-4xl font-extrabold mt-10">Server Info</h1>
      <BodyWrapper>
        <div className="flex flex-col 2md:flex-row  gap-7">
          <LeftSidebar />
          <RightSidebar />
        </div>
        <div>
          <ServerTabs />
          <ServerReview />
          <Review user={{ name: "Username", avatar: "/discord_avatar.png" }} rating={5} description={"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."} />
          <Review user={{ name: "Username", avatar: "/discord_avatar.png" }} rating={5} description={"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."} />
          <Review user={{ name: "Username", avatar: "/discord_avatar.png" }} rating={5} description={"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."} />
          <Review user={{ name: "Username", avatar: "/discord_avatar.png" }} rating={5} description={"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."} />
        </div>
      </BodyWrapper >
    </div>
  </>;
}


function LeftSidebar() {
  return <>
    <section className="flex-[7] bg-black bg-opacity-10 px-4 py-2 rounded-sm">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-4">
          <img src="/server_logo.png" width={80} height={80} />
          <span className="font-bold text-2xl">
            Mythical
          </span>
        </div>
        <div className="flex gap-3">
          <button className="px-3 py-2 bg-orange-700 rounded-md">Donate</button>
          <button className="px-3 py-2 bg-blue-700 rounded-md">Website</button>
          <button><FontAwesomeIcon icon={faWarning} className="text-red-600" width={30} height={30} /></button>
        </div>
      </div>
      <Spacer className="my-2" />
      <div className="flex flex-col items-center gap-2">
        <video src={"/banner.mp4"} autoPlay={true} loop={true} className="shrink-0 p-2 h-18" />
        <p className="text-md py-5 px-5 bg-black bg-opacity-20">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </p>
      </div>
    </section>
  </>;
}

function RightSidebar() {
  const categories = [
    {
      icon: faVoteYea,
      value: "500",
      tooltip: "Current votes"
    },
    {
      icon: faStar,
      value: "5.00",
      tooltip: "Rating"
    },
    {
      icon: faDiscord,
      value: <button className="px-2.5 py-1.5 text-sm font-bold bg-lime-600 rounded-md">Join Discord</button>,
      tooltip: "Discord",
    },
    {
      icon: faGlobeAmericas,
      value: "United States",
      tooltip: "Host location",
    },
    {
      icon: faCalendar,
      value: "RS2",
      tooltip: "Revision",
    },
    {
      icon: faGamepad,
      value: "Economy",
      tooltip: "Server type",
    },
    {
      icon: faAdd,
      value: (new Date()).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }),
      tooltip: "Server type",
    },
    {
      icon: faRefresh,
      value: (new Date()).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }),
      tooltip: "Server type",
    },
  ];

  return <>
    <section className="flex-[2] ">
      <DataTable categories={categories} />
    </section>
  </>;
}


function ServerTabs() {
  return <>
    <div className="flex gap-2">
      <button className="border-b border-b-blue-600  px-2.5 py-2 text-blue-600 hover:text-blue-800 hover:border-b-blue-800">Server Reviews</button>
      <button className="border-b border-b-white  px-2.5 py-2 text-white hover:text-gray-300 hover:border-b-gray-300">Vote history</button>
    </div>
  </>;
}


function ServerReview() {
  let scores = [3, 2, 0, 1, 0];
  let users = scores.reduce((sum, a) => sum + a);
  let average = Math.round((scores.map((value, index) => value * (scores.length - index)).reduce((sum, a) => sum + a) / users) * 100) / 100;
  return <>
    <div className="mt-5" />
    <h1 className="text-2xl font-bold">Server Reviews</h1>
    <div className="flex 2md:flex-row flex-col gap-5">
      <div className="flex flex-col flex-1 gap-2 mt-3">
        <div className="flex gap-0.5 items-center">
          {(Array(5).fill(0).map((_, index) => (
            <FontAwesomeIcon icon={faStar} className={`${index < Math.round(average) ? "text-yellow-500" : "text-gray-700"}`} />
          )))}
          <span className="px-1 text-sm">{average}/5 voted by {users} user{users > 1 ? "s" : ""}</span>
        </div>
        <ScoreChart scores={scores} />
      </div>
      <div className="flex flex-1">
        <div className="mx-4 bg-black bg-opacity-30 w-full h-full rounded-md px-5 justify-center items-center flex flex-col gap-3">
          <h2 className="text-xl font-bold text-center">Write a review</h2>
          <h3>Let us know how you liked or disliked the server, share it with the world!</h3>
          <button className="w-full py-2 bg-orange-600 rounded-md text-black max-w-96">Login to write a review</button>
        </div>
      </div>
    </div>
  </>;
}
