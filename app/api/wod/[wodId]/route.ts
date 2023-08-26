import { prisma } from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const id = request.url.split("wod/")[1];

  if (!id) {
    return NextResponse.json({ message: "id required" }, { status: 404 });
  }
  const wod = await prisma.wod.delete({ where: { id } });

  if (!wod) {
    return NextResponse.json({ message: "no matching wod" }, { status: 404 });
  }
  return NextResponse.json({}, { status: 200 });
}
