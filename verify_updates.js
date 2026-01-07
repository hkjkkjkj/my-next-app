
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Manually load env
try {
    const envPath = path.resolve(__dirname, '.env.local');
    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        envFile.split('\n').forEach(line => {
            const parts = line.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join('=').trim();
                const cleanValue = value.replace(/^["'](.*)["']$/, '$1');
                if (key && !process.env[key]) {
                    process.env[key] = cleanValue;
                }
            }
        });
    }
} catch (e) { }

async function check() {
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    };

    console.log(`Connecting to ${config.database}...`);
    const connection = await mysql.createConnection(config);

    const slugs = [
        'black-ops-7',
        'cyberpunk-2077',
        'celeste',
        'doom-the-dark-ages',
        'arknights-endfield'
    ];

    const [rows] = await connection.query(
        `SELECT id, title, slug, hero_image FROM games WHERE slug IN (?)`,
        [slugs]
    );

    console.log('--- DB STATE ---');
    rows.forEach(r => console.log(`${r.slug}: ${r.hero_image}`));

    await connection.end();
}

check();
