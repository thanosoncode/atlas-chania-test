import EmailTemplate from "../../components/emailTemplate/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, message } = (await req.json()) as {
    email: string;
    message: string;
  };

  if (!email || !message) {
    return NextResponse.json(
      { message: "Email and message are required" },
      { status: 400 }
    );
  }

  try {
    const data = await resend.emails.send({
      from: "Info <info@atlaschania.gr>",
      to: ["thanosoncode@gmail.com", "giannisdagou@gmail.com"],
      subject: "New message",
      react: EmailTemplate({ email, message }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
