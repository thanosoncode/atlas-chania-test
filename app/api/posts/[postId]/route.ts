import { prisma } from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const id = request.url.split("posts/")[1];

  if (!id) {
    return NextResponse.json({ message: "id required" }, { status: 404 });
  }
  const blog = await prisma.post.delete({ where: { id } });

  if (!blog) {
    return NextResponse.json(
      { message: "no matching product" },
      { status: 404 }
    );
  }
  return NextResponse.json({}, { status: 200 });
}

export async function GET(request: Request) {
  const id = request.url.split("posts/")[1];

  if (!id || id.length !== 24) {
    return NextResponse.json({ message: "id required" }, { status: 404 });
  }

  const post = await prisma.post.update({
    where: { id },
    data: { likes: { increment: 1 } },
  });

  if (!post) {
    return NextResponse.json(
      { message: "no matching product" },
      { status: 404 }
    );
  }
  return NextResponse.json({}, { status: 200 });
}
