
const mysql = require('mysql2/promise');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function checkSchema() {
    console.log('--- Checking games table schema ---');

    // Check if .env.local exists
    if (!fs.existsSync('.env.local')) {
        console.error('Error: .env.local file not found.');
        process.exit(1);
    }

    const connection = await mysql.createConnection({
        component: 'schema_check',
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    try {
        const [columns] = await connection.query(`DESCRIBE games`);
        console.log('Columns in games table:');
        columns.forEach(col => {
            console.log(`- ${col.Field} (${col.Type})`);
        });

        const hasPrice = columns.some(c => c.Field === 'price');
        const hasDiscount = columns.some(c => c.Field === 'discount');
        const hasOriginalPrice = columns.some(c => c.Field === 'original_price');

        console.log('\nAnalysis:');
        console.log(`- Has price column: ${hasPrice}`);
        console.log(`- Has discount column: ${hasDiscount}`);
        console.log(`- Has original_price column: ${hasOriginalPrice}`);

    } catch (error) {
        console.error('Error querying schema:', error);
    } finally {
        await connection.end();
    }
}

checkSchema();
