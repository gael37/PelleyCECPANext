import WelcomeTemplate from "@/emails/WelcomeTemplate"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  const data = await resend.emails.send({
    from: 'gaelduchesne.com',
    to: 'gx.duchesne@gmail.com',
    subject: 'I@apos;m testing email sending',
    react: <WelcomeTemplate name="John" />
  })

  return NextResponse.json({ info: 'mail sent', data: data })
}