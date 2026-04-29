import { NextResponse } from "next/server";

/**
 * Lead-capture stub. Logs the submission to the server console and returns 200.
 * Replace the body with a real provider (Formspree / Resend / Web3Forms / SendGrid)
 * before going live. README documents the swap.
 */
export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  console.log("[submit-lead] received", JSON.stringify(payload, null, 2));

  return NextResponse.json({ ok: true, message: "Lead received (stub)." });
}
