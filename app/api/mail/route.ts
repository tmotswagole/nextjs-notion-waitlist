import { render } from "@react-email/render";

import JurificaWelcomeTemplate from "../../../emails";

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { formProtection } from "@/lib/arcjet";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, firstname } = body;

  // Arcjet protection with rate limiting, bot detection, and email validation
  const decision = await formProtection.protect(request, {
    email: email, // Email for validation
  });

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    if (decision.reason.isBot()) {
      return NextResponse.json(
        { error: "Bot detected. Request blocked." },
        { status: 403 }
      );
    }

    if (decision.reason.isEmail()) {
      return NextResponse.json(
        { error: "Invalid or disposable email address." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Request blocked for security reasons." },
      { status: 403 }
    );
  }

  // Validate required fields
  if (!email || !firstname) {
    return NextResponse.json(
      { error: "Name and email are required fields." },
      { status: 400 }
    );
  }

  // Additional email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Validate name (no empty strings, reasonable length)
  if (firstname.trim().length < 2 || firstname.trim().length > 100) {
    return NextResponse.json(
      { error: "Name must be between 2 and 100 characters." },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Jurifica<waitinglist@jurifica.com>",
      to: [email],
      subject: "Welcome to Jurifica's Private Beta Waitlist! 🚀",
      reply_to: "hello@jurifica.com",
      html: await render(JurificaWelcomeTemplate({ userFirstname: firstname })),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: "Email sent successfully",
      success: true 
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "An error occurred while sending email." },
      { status: 500 }
    );
  }
}
