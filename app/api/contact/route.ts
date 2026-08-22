import { NextResponse } from 'next/server';

export const runtime = 'edge';

const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'reason'] as const;

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      {
        message:
          'Online requests are being connected. Please call 843-713-0669 for now.',
      },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: 'Invalid form submission.' }, { status: 400 });
  }

  if (body.botcheck) {
    return NextResponse.json({ success: true });
  }

  for (const field of requiredFields) {
    if (typeof body[field] !== 'string' || !body[field]?.toString().trim()) {
      return NextResponse.json(
        { message: 'Please complete all required fields.' },
        { status: 400 },
      );
    }
  }

  const email = String(body.email).trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: 'Please enter a valid email.' }, { status: 400 });
  }

  const web3Response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: 'New BioSpine appointment request',
      from_name: 'BioSpine website',
      first_name: String(body.firstName).trim(),
      last_name: String(body.lastName).trim(),
      email,
      phone: String(body.phone).trim(),
      reason: String(body.reason).trim(),
      message: typeof body.message === 'string' ? body.message.trim() : '',
    }),
  });

  const result = (await web3Response.json()) as { success?: boolean; message?: string };
  if (!web3Response.ok || !result.success) {
    return NextResponse.json(
      { message: 'We could not send your request. Please call the office instead.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
