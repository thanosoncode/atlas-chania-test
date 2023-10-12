import { prisma } from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = (await request.json()) as { email: string };

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    const exists = await prisma.subscriber.findFirst({
      where: { email },
    });

    if (exists) {
      return NextResponse.json(
        { message: "Subscriber already exists" },
        { status: 400 }
      );
    }
    const subscriber = await prisma.subscriber.create({
      data: { email },
    });
    return NextResponse.json({ subscriber }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = (await request.json()) as { id: string };

    const exists = await prisma.subscriber.findFirst({
      where: { id },
    });

    if (!exists) {
      return NextResponse.json(
        { message: "Subscriber does not exist" },
        { status: 404 }
      );
    }
    const deletedSubscriber = await prisma.subscriber.delete({
      where: { id },
    });
    return NextResponse.json({ deletedSubscriber }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
