import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template'
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req: Request, res: NextApiResponse) {  
  const { name, email, subject, message } = await req.json()
  try {
    const data = await resend.emails.send({ 
      from: fromEmail!,
      to: [toEmail, email],
      subject: name + " RE: " + subject,
      react: EmailTemplate({
        name: name,
        email: email,
        subject: subject,
        message: message
      }) as ReactElement
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
