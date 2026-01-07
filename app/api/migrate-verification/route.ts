
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
    try {
        console.log('Starting migration for email verification...');

        const checkColumn = async (colName: string, colDef: string) => {
            try {
                await query(`SELECT ${colName} FROM users LIMIT 1`);
                console.log(`${colName} exists`);
            } catch (e: any) {
                console.log(`Adding ${colName}...`);
                await query(`ALTER TABLE users ADD COLUMN ${colName} ${colDef}`);
            }
        };

        await checkColumn('is_verified', 'BOOLEAN DEFAULT FALSE');
        await checkColumn('verification_code', 'VARCHAR(10)');
        await checkColumn('verification_expires', 'TIMESTAMP NULL');

        return NextResponse.json({ success: true, message: 'Verification migration completed' });
    } catch (error: any) {
        console.error('Migration failed:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
