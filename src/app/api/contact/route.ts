import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Log API key status (first few characters for security)
console.log('Resend API Key Status:', process.env.RESEND_API_KEY ? 'Present' : 'Missing');

// Placeholder for your email sending logic
// You'll need to install an email library (e.g., Resend, Nodemailer, SendGrid)
// and configure it with your email provider credentials.

// Example using Resend (you'd need to install resend: npm install resend)
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
export const runtime = 'edge'
export async function POST(request: Request) {
  const toEmail = 'alvoloconsulting@gmail.com';
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation (you can expand this)
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if Resend is properly initialized
    if (!resend) {
      console.error('Resend API key is missing');
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 });
    }

    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Would send to:', toEmail);

    // Send email using Resend
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
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 