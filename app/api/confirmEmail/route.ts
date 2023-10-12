import { isValidEmail } from "@/app/utils/helpers";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ConfirmEmailEmailTemplate from "@/app/components/confirmEmailEmailTemplate/ConfirmEmailEmailTemplate";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/prisma/prismaClient";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = (await req.json()) as {
    email: string;
  };
  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
  }
  try {
    const exist = await prisma.subscriber.findFirst({
      where: { email },
    });
    if (exist) {
      return NextResponse.json(
        { message: "User already exists in newsletter" },
        { status: 409 }
      );
    }
    const uuid = uuidv4();
    await prisma.emailToVerify.create({
      data: {
        email,
        uuid,
      },
    });
    const confirmUrl = `https://www.atlaschania.gr/confirm/${uuid}`;
    const data = await resend.emails.send({
      from: "Info <info@atlaschania.gr>",
      to: [email],
      subject: "Confirm email",
      react: ConfirmEmailEmailTemplate({
        email,
        confirmUrl,
      }) as React.ReactElement,
    });

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
