import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";
import { formProtection } from "@/lib/arcjet";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email } = body;

  // Arcjet protection
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
  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required fields." },
      { status: 400 }
    );
  }

  // Additional validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (name.trim().length < 2 || name.trim().length > 100) {
    return NextResponse.json(
      { error: "Name must be between 2 and 100 characters." },
      { status: 400 }
    );
  }

  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET });
    const response = await notion.pages.create({
      parent: {
        database_id: `${process.env.NOTION_DB}`,
      },
      properties: {
        Email: {
          type: "email",
          email: email,
        },
        Name: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: name,
              },
            },
          ],
        },
      },
    });

    if (!response) {
      throw new Error("Failed to add email to Notion");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Notion API error:", error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}