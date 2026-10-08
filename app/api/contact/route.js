import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { fullName, email, phone, subject, message } = await request.json();

    // Basic validation
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Since Resend is removed, we'll just log the message and return success.
    console.log('New Contact Form Submission:', { fullName, email, phone, subject, message });

    return NextResponse.json(
      { message: 'Message sent successfully (simulated)' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}
