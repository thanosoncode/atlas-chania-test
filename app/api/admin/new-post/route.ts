import { prisma } from "@/prisma/prismaClient";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const { title, image, content } = (await request.json()) as {
    title: string;
    content: string;
    image: string;
  };

  if (!title || !content || !image) {
    return NextResponse.json(
      {
        message: "title, image url and content are required",
      },
      { status: 400 }
    );
  }

  const blog = await prisma.post.create({
    data: {
      title,
      content,
      image,
      likes: 0,
    },
  });

  if (blog) {
    return NextResponse.json(blog, { status: 201 });
  }

  return NextResponse.json({ status: 404 });
}
