import NewsletterEmailTemplate from "@/app/components/newsletterEmailTemplate/NewletterEmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/prisma/prismaClient";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { blog } = (await req.json()) as {
    blog: {
      id: string;
      title: string;
      image: string;
    };
  };

  if (!blog) {
    return NextResponse.json(
      { message: "Something went wrong, try again later" },
      { status: 400 }
    );
  }

  try {
    const subscribers = await prisma.subscriber.findMany();

    const emailPromises: Promise<CreateEmailResponse>[] = [];

    subscribers.forEach((sub) => {
      const emailPromise = resend.emails.send({
        from: "Info <info@atlaschania.gr>",
        to: [sub.email],
        subject: "Atlas Chania Newsletter",
        react: NewsletterEmailTemplate({ blog }) as React.ReactElement,
      });

      emailPromises.push(emailPromise);
    });

    await Promise.all(emailPromises);

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
