
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

async function testEmail() {
    console.log('--- Email Diagnostic ---');

    // 1. Load env manually
    const envPath = path.join(__dirname, '.env.local');
    if (!fs.existsSync(envPath)) {
        console.error('ERROR: .env.local not found!');
        return;
    }

    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    envContent.split('\n').forEach(line => {
        const parts = line.split('=');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join('=').trim();
            envVars[key] = value;
        }
    });

    const user = envVars.SMTP_EMAIL;
    const pass = envVars.SMTP_PASSWORD;

    console.log('SMTP Config Check:');
    console.log(`- User: ${user ? user : 'MISSING'}`);
    console.log(`- Pass: ${pass ? 'FOUND (Length: ' + pass.length + ')' : 'MISSING'}`);

    if (!user || !pass) {
        console.error('ERROR: Missing credentials in .env.local');
        return;
    }

    // 2. Create Transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass },
    });

    // 3. Send Mail
    try {
        console.log('Attempting to send email...');
        const info = await transporter.sendMail({
            from: user,
            to: user, // Send to self
            subject: 'Test Email from Diagnostic Script',
            text: 'If you see this, email sending is working!',
        });
        console.log('SUCCESS: Email sent!');
        console.log('Message ID:', info.messageId);
    } catch (error) {
        console.error('FAILURE: Error sending email.');
        console.error(error);
    }
    console.log('--- End Diagnostic ---');
}

testEmail();
