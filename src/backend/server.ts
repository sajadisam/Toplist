import prisma from "./prisma";

export default async function get_server(name: string) {
  return await prisma.server.findFirst({
    where: {
      name: name as string,
    },
    include: {
      vote: {
        take: 1,
        select: {
          vote_count: true,
        },
        orderBy: {
          vote_count: "desc",
        },
      },
    }
  });
}
