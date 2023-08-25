import { prisma } from "@/prisma/prismaClient";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const { wodTitle, wodContent } = (await request.json()) as {
    wodTitle: string;
    wodContent: string;
  };

  if (!wodTitle || !wodContent) {
    return NextResponse.json(
      {
        message: "title, and content are required",
      },
      { status: 400 }
    );
  }

  const wod = await prisma.wod.create({
    data: {
      wodTitle,
      wodContent,
    },
  });

  if (wod) {
    return NextResponse.json(wod, { status: 201 });
  }

  return NextResponse.json({ status: 404 });
}
