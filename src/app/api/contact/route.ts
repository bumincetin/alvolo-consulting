import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Configure nodemailer transporter (alternative option)
const createTransporter = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return null;
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Placeholder for your email sending logic
// You'll need to install an email library (e.g., Resend, Nodemailer, SendGrid)
// and configure it with your email provider credentials.

// Example using Resend (you'd need to install resend: npm install resend)
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
export const runtime = 'edge';

export async function POST(request: Request) {
  const toEmail = process.env.CONTACT_EMAIL || 'alvoloconsulting@gmail.com';
  
  try {
    console.log('Starting contact form submission...');

    const body = await request.json();
    const { name, email, message, privacyConsent, marketingConsent } = body;

    console.log('Received form data:', { 
      name, 
      email, 
      messageLength: message?.length,
      privacyConsent,
      marketingConsent
    });

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

    // Check if privacy consent is given
    if (!privacyConsent) {
      return NextResponse.json({
        error: 'Privacy consent required',
        details: 'You must accept the privacy policy to submit this form.'
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

    // Try Resend first, then fallback to Nodemailer
    let emailSent = false;
    let errorDetails = '';

    // Option 1: Try Resend
    if (resend) {
      try {
        const { error } = await resend.emails.send({
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
                <p style="margin: 10px 0;"><strong>Privacy Consent:</strong> ${privacyConsent ? 'Yes' : 'No'}</p>
                <p style="margin: 10px 0;"><strong>Marketing Consent:</strong> ${marketingConsent ? 'Yes' : 'No'}</p>
                <p style="margin: 10px 0;"><strong>Message:</strong></p>
                <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
          `,
        });

        if (error) {
          errorDetails = `Resend error: ${error.message}`;
        } else {
          emailSent = true;
          console.log('Email sent successfully via Resend');
        }
      } catch (resendError) {
        errorDetails = `Resend error: ${resendError instanceof Error ? resendError.message : 'Unknown error'}`;
      }
    }

    // Option 2: Try Nodemailer if Resend failed or not configured
    if (!emailSent) {
      const transporter = createTransporter();
      if (transporter) {
        try {
          await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: toEmail,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1a365d;">New Contact Form Submission</h2>
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
                  <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                  <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                  <p style="margin: 10px 0;"><strong>Privacy Consent:</strong> ${privacyConsent ? 'Yes' : 'No'}</p>
                  <p style="margin: 10px 0;"><strong>Marketing Consent:</strong> ${marketingConsent ? 'Yes' : 'No'}</p>
                  <p style="margin: 10px 0;"><strong>Message:</strong></p>
                  <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>
            `,
          });
          emailSent = true;
          console.log('Email sent successfully via Nodemailer');
        } catch (nodemailerError) {
          errorDetails = `Nodemailer error: ${nodemailerError instanceof Error ? nodemailerError.message : 'Unknown error'}`;
        }
      }
    }

    if (emailSent) {
      return NextResponse.json({ 
        message: 'Email sent successfully',
        details: 'Your message has been delivered'
      }, { status: 200 });
    } else {
      // If neither email service is configured
      if (!resend && !process.env.GMAIL_USER) {
        return NextResponse.json({
          error: 'Email service not configured',
          details: 'Please configure either RESEND_API_KEY or GMAIL_USER and GMAIL_APP_PASSWORD in your environment variables. See the README for setup instructions.'
        }, { status: 500 });
      }

      return NextResponse.json({
        error: 'Failed to send email',
        details: errorDetails || 'Unknown error occurred'
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : 'An unexpected error occurred'
    }, { status: 500 });
  }
} 