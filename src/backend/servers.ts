import prisma from "./prisma";

interface Response {
  name: string,
  image: string,
  vote_count: number,
  description: string,
  banner?: string,
}

const SERVERS_PER_PAGE = 10;

export async function get_max_pages(): Promise<number> {
  return Math.ceil(await prisma.server.count() / SERVERS_PER_PAGE);

}

export async function get_page(page: number): Promise<Response[]> {
  if (!page || page <= 0) {
    page = 1;
  }
  return await prisma.$queryRaw`
    select server.name, server.description, server.banner, server.image, MAX(v.vote_count) as vote_count from server 
    left join vote v on server.id = v.server_id group by server.name, server.image, server.banner, server.description 
    order by vote_count DESC OFFSET ${SERVERS_PER_PAGE * (page - 1)} LIMIT ${SERVERS_PER_PAGE};
  `;
}
