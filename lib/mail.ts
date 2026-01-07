
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});



export async function sendVerificationEmail(to: string, code: string) {
    try {
        const info = await transporter.sendMail({
            from: `"Epic Store Clone" <${process.env.SMTP_EMAIL}>`,


            to,
            subject: 'Verify your account - Epic Store Clone',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
                    <div style="background-color: #2a2a2a; padding: 20px; text-align: center;">
                        <h1 style="color: white; margin: 0;">Epic Store Clone</h1>
                    </div>
                    <div style="background-color: white; padding: 20px; border-radius: 4px; margin-top: 20px;">
                        <h2 style="color: #333;">Verify Your Email</h2>
                        <p style="color: #666;">Thanks for signing up! Please use the following code to verify your account:</p>
                        <div style="background-color: #e5f2ff; padding: 15px; text-align: center; border-radius: 4px; margin: 20px 0;">
                            <span style="font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #007bff;">${code}</span>
                        </div>
                        <p style="color: #666; font-size: 14px;">This code will expire in 15 minutes.</p>
                    </div>
                </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
    }
}
