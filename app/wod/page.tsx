import { prisma } from "@/prisma/prismaClient";
import Wod from "./Wod";
import { getServerSession } from "next-auth";
import { Session } from "../admin/page";

const WodPage = async () => {
  const session = (await getServerSession()) as Session | undefined;

  const allWods = (await prisma.wod.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })) as unknown;

  return (
    <div key={Math.random()}>
      <Wod
        session={session}
        allWods={
          allWods as {
            id: string;
            wodTitle: string;
            wodContent: string;
            createdAt: Date;
          }[]
        }
      />
    </div>
  );
};
export default WodPage;
