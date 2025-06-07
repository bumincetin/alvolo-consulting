import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Placeholder for your email sending logic
// You'll need to install an email library (e.g., Resend, Nodemailer, SendGrid)
// and configure it with your email provider credentials.

// Example using Resend (you'd need to install resend: npm install resend)
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
export const runtime = 'edge';

export async function POST(request: Request) {
  const toEmail = 'alvoloconsulting@gmail.com';
  
  try {
    // Log the start of the request
    console.log('Starting contact form submission...');

    const body = await request.json();
    const { name, email, message } = body;

    // Log received data
    console.log('Received form data:', { name, email, messageLength: message?.length });

    // Basic validation
    if (!name || !email || !message) {
      console.log('Validation failed:', { name: !!name, email: !!email, message: !!message });
      return NextResponse.json({ 
        error: 'Missing required fields',
        details: {
          name: !name ? 'Name is required' : null,
          email: !email ? 'Email is required' : null,
          message: !message ? 'Message is required' : null
        }
      }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json({
        error: 'Email service not configured',
        details: 'Missing RESEND_API_KEY in environment variables.'
      }, { status: 500 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return NextResponse.json({ 
        error: 'Invalid email format',
        details: 'Please provide a valid email address'
      }, { status: 400 });
    }

    console.log('Attempting to send email...');

    const { data, error } = await resend.emails.send({
      from: 'Alvolo Consulting <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({
        error: 'Failed to send email',
        details: error.message || 'Unknown error occurred'
      }, { status: 500 });
    }

    console.log('Email sent successfully');
    return NextResponse.json({ 
      message: 'Email sent successfully',
      details: 'Your message has been delivered'
    }, { status: 200 });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : 'An unexpected error occurred'
    }, { status: 500 });
  }
} 