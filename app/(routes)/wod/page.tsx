import { prisma } from "@/prisma/prismaClient";
import Wod from "./Wod";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { Session } from "@/app/utils/types";

export async function generateMetadata(): Promise<Metadata> {
  const allWods = await prisma.wod.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    title: `WOD: ${allWods[0].wodTitle}`,
    description: allWods[0].wodPlainText,
    keywords:
      "Workout of the day, WOD Atlas Chania, Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, Γιαννης Νταγκουνακης, προπόνηση με μηχανήματα, άρση βαρών, weightlifting, CrossFit, powerlifting, πρόγραμμα γυμναστικής, συμβουλές διατροφής",
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
