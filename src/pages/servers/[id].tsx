import Header from "@/components/header";
import { useRouter } from "next/router";
import links from "@/data/links"

export default function ServerPage() {
  const router = useRouter();
  const serverId = router.query.id;

  return <div className="pattern">
    {/* <Header logo="/logo.png" links={links} /> */}
  </div>;

}
