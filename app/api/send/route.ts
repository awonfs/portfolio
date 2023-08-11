import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL!!,
      to: [process.env.EMAIL!!],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Eetu" }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
