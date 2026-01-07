
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

    try {
        const connection = await mysql.createConnection(config);
        const slugs = [
            'arknights-endfield',
            'assassins-creed-valhalla',
            'back-4-blood',
            'batman-arkham-knight',
            'battlefield-6',
            'anno-117-pax-romana',
            'arc-raiders'
        ];

        const [rows] = await connection.query(`SELECT title, slug, hero_image FROM games WHERE slug IN (?)`, [slugs]);


        let output = '--- PATH CHECK ---\n';
        rows.forEach(row => {
            if (!row.hero_image) {
                output += `[${row.title}] has NO image path set.\n`;
                return;
            }

            const relativePath = row.hero_image.startsWith('/') ? row.hero_image.substring(1) : row.hero_image;
            const absolutePath = path.join(__dirname, 'public', relativePath);
            const exists = fs.existsSync(absolutePath);

            output += `\nGame: ${row.title}\n`;
            output += `  Db Path: ${row.hero_image}\n`;
            output += `  Abs Path: ${absolutePath}\n`;
            output += `  Exists: ${exists ? 'YES' : 'NO'}\n`;
        });

        fs.writeFileSync('check_results.txt', output);
        await connection.end();
    } catch (e) {
        fs.writeFileSync('check_results.txt', 'Error: ' + e.message);
    }
}

check();

