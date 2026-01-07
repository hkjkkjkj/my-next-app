
const fs = require('fs');
const path = require('path');

// Removing spaces from app password for safety
const smtpPassword = 'nmma utut padd zxax'.replace(/\s/g, '');

const content = `DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=game_data
GOOGLE_CLIENT_ID=99787041957-s74u85mrm1en0uevs5dumbiv13uinjok.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
SMTP_EMAIL=pykeonlypyke@gmail.com
SMTP_PASSWORD=${smtpPassword}
`;

const filePath = path.join(__dirname, '.env.local');

try {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
    fs.writeFileSync(filePath, content.trim(), 'utf8');
    console.log('Successfully fixed .env.local with Email Config');
} catch (err) {
    console.error('Error writing file:', err);
}
