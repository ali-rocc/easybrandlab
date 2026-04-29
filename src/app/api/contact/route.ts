import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================
    // 1. EMAIL TO YOU (HTML SaaS STYLE)
    // =========================
    await transporter.sendMail({
      from: `"EasyBrandLabs Website" <${process.env.EMAIL_USER}>`,
      to: 'support@easybrandlab.xyz',
      subject: `📩 New Lead from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f6f9fc; padding:20px;">
          <div style="max-width:600px; margin:auto; background:white; padding:24px; border-radius:12px;">
            
            <h2 style="color:#2563eb;">New Contact Form Submission</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>

            <hr style="margin:20px 0;" />

            <p><strong>Message:</strong></p>
            <p style="white-space:pre-line; color:#333;">
              ${message}
            </p>

            <hr style="margin:20px 0;" />

            <p style="font-size:12px; color:#888;">
              EasyBrandLabs Contact System
            </p>
          </div>
        </div>
      `,
    });

    // =========================
    // 2. AUTO REPLY TO USER
    // =========================
    await transporter.sendMail({
      from: `"EasyBrandLabs" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your message ✔`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f6f9fc; padding:20px;">
          <div style="max-width:600px; margin:auto; background:white; padding:24px; border-radius:12px;">
            
            <h2 style="color:#16a34a;">Thanks for reaching out!</h2>

            <p>Hi <strong>${name}</strong>,</p>

            <p>
              We’ve received your message and our team will get back to you within
              <strong>2 business hours</strong>.
            </p>

            <p style="margin-top:20px;">
              <strong>Your message:</strong><br/>
              <em style="color:#555;">${message}</em>
            </p>

            <hr style="margin:20px 0;" />

            <p style="font-size:12px; color:#888;">
              — EasyBrandLabs Team
            </p>
          </div>
        </div>
      `,
    });

    // Note: Conversion event is tracked on client-side after form submission
    // See ContactForm.tsx for trackConversion() call
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}