import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, role, message } = body;

    if (!name || (!email && !phone) || !message) {
      return NextResponse.json(
        { error: "Please provide your name, message, and either an email or phone number." },
        { status: 400 }
      );
    }

    // Forward to Badrikedardevelopers@gmail.com via FormSubmit API
    const response = await fetch("https://formsubmit.co/ajax/Badrikedardevelopers@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New Inquiry from ${name} - Badri Kedar Developers Website`,
        Name: name,
        Email: email || "Not provided",
        Phone: phone || "Not provided",
        "Inquiry Type": role || "General Inquiry",
        Message: message,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = await response.json();

    if (response.ok && data?.success !== "false") {
      return NextResponse.json({ success: true, message: "Your message has been sent successfully!" });
    } else {
      return NextResponse.json(
        { error: data?.message || "Failed to deliver message" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
