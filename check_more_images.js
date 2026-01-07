
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const subdirs = [
    'images',
    'trending',
    'top-new-releases',
    'epic-form-epic-first-run',
    'discover-game',
    'now-on',
    'spotlight'
];

const targets = [
    'black-ops', 'celeste', 'clair-obscur', 'crystal', 'cyberpunk', 'cronos', 'constance', 'crosshair', 'dragon'
];

console.log('--- FINDING IMAGES ---');
let output = '';

function search() {
    subdirs.forEach(subdir => {
        const dirPath = path.join(publicDir, subdir);
        if (!fs.existsSync(dirPath)) return;

        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            const lower = file.toLowerCase();
            for (const target of targets) {
                if (lower.includes(target)) {
                    const line = `Found: ${target} -> /${subdir}/${file}\n`;
                    console.log(line.trim());
                    output += line;
                }
            }
        });
    });
    fs.writeFileSync('found_images.txt', output);
}

search();
