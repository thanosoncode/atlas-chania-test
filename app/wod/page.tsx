import { prisma } from "@/prisma/prismaClient";
import Wod from "./Wod";
import { getServerSession } from "next-auth";
import { Session } from "../admin/page";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const allWods = await prisma.wod.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    title: allWods[0].wodTitle,
    description: allWods[0].wodPlainText,
  };
}

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
