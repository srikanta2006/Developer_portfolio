import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
  website?: string; // honeypot
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Honeypot check: silently succeed for bots
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true, delivered: "filtered" });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const topic = body.topic?.trim() || "General";
    const message = body.message?.trim() ?? "";

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Please enter your name (2–100 characters)." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email) || email.length > 150) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 2000 characters." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_EMAIL || "srikantacvr@gmail.com";
    const resendKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (resendKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [recipient],
          reply_to: email,
          subject: `[Portfolio · ${topic}] Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error("Resend delivery failed:", errText);
        return NextResponse.json(
          { error: "Failed to deliver email. Please try again or use direct email." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, delivered: "email" });
    }

    if (webhookUrl) {
      const hookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          topic,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!hookRes.ok) {
        console.error("Webhook delivery failed:", hookRes.status);
        return NextResponse.json(
          { error: "Failed to deliver message. Please try again or use direct email." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, delivered: "webhook" });
    }

    // Fallback when no external email/webhook provider is configured yet
    console.info("[Portfolio Direct Message]", {
      name,
      email,
      topic,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, delivered: "logged" });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
