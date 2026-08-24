import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'reason'] as const;
const maxLengths = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 30,
  reason: 80,
  message: 1500,
} as const;
const allowedReasons = new Set([
  'New patient consultation',
  'DOT physical',
  'Back or neck pain',
  'Shockwave therapy',
  'Headaches or migraines',
  'Sports injury',
  'Auto accident injury',
  'Arthritis or joint pain',
  'General wellness',
  'Other / not sure',
]);

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

  if (!request.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ message: 'Invalid form submission.' }, { status: 415 });
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 10_000) {
    return NextResponse.json({ message: 'Form submission is too large.' }, { status: 413 });
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
    if (typeof body[field] !== 'string' || !body[field].trim()) {
      return NextResponse.json(
        { message: 'Please complete all required fields.' },
        { status: 400 },
      );
    }
    if (body[field].trim().length > maxLengths[field]) {
      return NextResponse.json({ message: 'Please shorten your response.' }, { status: 400 });
    }
  }

  if (typeof body.message === 'string' && body.message.trim().length > maxLengths.message) {
    return NextResponse.json({ message: 'Please shorten your message.' }, { status: 400 });
  }

  const email = String(body.email).trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: 'Please enter a valid email.' }, { status: 400 });
  }

  const phone = String(body.phone).trim();
  if (!/^[0-9+().\-\s]{7,30}$/.test(phone)) {
    return NextResponse.json({ message: 'Please enter a valid phone number.' }, { status: 400 });
  }

  const reason = String(body.reason).trim();
  if (!allowedReasons.has(reason)) {
    return NextResponse.json({ message: 'Please select a valid reason for visiting.' }, { status: 400 });
  }

  let web3Response: Response;
  try {
    web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({
        access_key: accessKey,
        subject: 'New BioSpine appointment request',
        from_name: 'BioSpine website',
        first_name: String(body.firstName).trim(),
        last_name: String(body.lastName).trim(),
        email,
        phone,
        reason,
        message: typeof body.message === 'string' ? body.message.trim() : '',
      }),
    });
  } catch {
    return NextResponse.json(
      { message: 'We could not send your request. Please call the office instead.' },
      { status: 502 },
    );
  }

  const result = (await web3Response.json().catch(() => ({}))) as {
    success?: boolean;
  };
  if (!web3Response.ok || !result.success) {
    return NextResponse.json(
      { message: 'We could not send your request. Please call the office instead.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
