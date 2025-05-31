import { NextResponse } from 'next/server';

// Placeholder for your email sending logic
// You'll need to install an email library (e.g., Resend, Nodemailer, SendGrid)
// and configure it with your email provider credentials.

// Example using Resend (you'd need to install resend: npm install resend)
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const toEmail = 'alvoloconsulting@gmail.com';
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation (you can expand this)
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Would send to:', toEmail);

    // ** EMAIL SENDING LOGIC GOES HERE **
    // This is where you would integrate your email sending service.
    // For example, with Resend:
    /*
    try {
      const { data, error } = await resend.emails.send({
        from: 'Your App <onboarding@resend.dev>', // Replace with your verified sending email
        to: [toEmail],
        subject: `New Contact Form Submission from ${name}`,
        reply_to: email,
        html: `
          <p>You have a new contact form submission:</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
      }
      console.log('Email sent successfully:', data);
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (emailError) {
      console.error('Email sending exception:', emailError);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
    */

    // For now, since we don't have an email service, we'll just simulate success.
    // Replace this with actual email sending logic.
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return NextResponse.json({ message: 'Form submitted successfully (simulation)' }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 