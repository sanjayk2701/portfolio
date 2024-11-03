import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, subject, message }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS, // Your app password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Your email
        to: process.env.EMAIL_USER, // Send to your admin email
        subject: `New Contact Form Submission: ${subject}`,
        text: `
            You have received a new message from the contact form:
            
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};
