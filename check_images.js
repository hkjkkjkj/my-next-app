
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
        // Check specific games from the screenshot
        const slugs = ['arknights-endfield', 'assassins-creed-valhalla', 'back-4-blood', 'batman-arkham-knight', 'battlefield-6'];

        const [rows] = await connection.query(`SELECT id, title, slug, hero_image FROM games`);

        console.log('Database Entries Summary:');
        console.log(`Total Games: ${rows.length}`);

        // List all files in public recursively
        function getAllFiles(dirPath, arrayOfFiles) {
            files = fs.readdirSync(dirPath);
            arrayOfFiles = arrayOfFiles || [];
            files.forEach(function (file) {
                if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                    arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
                } else {
                    arrayOfFiles.push(path.join(dirPath, "/", file));
                }
            });
            return arrayOfFiles;
        }

        const publicDir = path.join(__dirname, 'public');
        const allFiles = getAllFiles(publicDir).map(f => f.replace(publicDir, '').replace(/\\/g, '/'));

        console.log('\n--- All Images In Public Folder ---');
        console.log(JSON.stringify(allFiles, null, 2));

        console.log('\n--- Broken Links ---');
        rows.forEach(row => {
            if (row.hero_image && !row.hero_image.startsWith('http')) {
                // simple check
                const found = allFiles.includes(row.hero_image);
                if (!found) {
                    console.log(`Missing: [${row.title}] -> ${row.hero_image}`);
                }
            }
        });

        await connection.end();
    } catch (e) {
        console.error(e);
    }
}

check();
