import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';



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

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail email
        pass: process.env.GMAIL_PASS, // App password
      },
    });

    const mailOptions = {
      from: email,
      to: toEmail,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

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