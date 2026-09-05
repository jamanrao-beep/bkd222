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

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const payload = {
      Timestamp: timestamp,
      Name: name,
      Email: email || "Not provided",
      Phone: phone || "Not provided",
      "Inquiry Type": role || "General Inquiry",
      Message: message,
    };

    // 1. Send to Google Sheet if Webhook URL is configured
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    let sheetPromise: Promise<any> = Promise.resolve();

    if (googleSheetWebhookUrl) {
      sheetPromise = fetch(googleSheetWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp,
          name,
          email: email || "",
          phone: phone || "",
          role: role || "General Inquiry",
          message,
        }),
      }).catch((err) => {
        console.error("Google Sheets webhook error:", err);
      });
    }

    // 2. Forward to Badrikedardevelopers@gmail.com via FormSubmit API
    const emailPromise = fetch("https://formsubmit.co/ajax/Badrikedardevelopers@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New Inquiry from ${name} - Badri Kedar Developers Website`,
        ...payload,
        _template: "table",
        _captcha: "false",
      }),
    });

    // Execute both in parallel
    const [emailRes] = await Promise.all([emailPromise, sheetPromise]);
    let emailData: any = {};
    try {
      if (emailRes && typeof emailRes.json === "function") {
        emailData = await emailRes.json();
      }
    } catch {
      // Ignored if json parsing fails
    }

    if (emailRes && emailRes.ok && emailData?.success !== "false") {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully and recorded!",
      });
    } else {
      return NextResponse.json(
        { error: emailData?.message || "Failed to deliver message" },
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

