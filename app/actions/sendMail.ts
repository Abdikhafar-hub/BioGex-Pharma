'use server'
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Use this to allow self-signed certificates
  },
  connectionTimeout: 60000, // Increase the connection timeout to 60 seconds
  greetingTimeout: 30000, // Increase the greeting timeout to 30 seconds
  socketTimeout: 60000, // Increase the socket timeout to 60 seconds
});

export async function sendEmail(data : {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    })
    {
  const { firstName, lastName, email, phone, message} = data;
const mailList = [
  'accounts@biogexpharma.com',
  'sales@biogexpharma.com',
  'aden@biogexpharma.com',
  'ahmed@biogexpharma.com',
  'info@biogexpharma.com',
]
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: mailList, // replace with your email
    subject: `New BioGex Pharma Website Form Submission from ${firstName} ${lastName}`,
    html: `
      <h1>BioGex Pharma Website Form Submission</h1>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
