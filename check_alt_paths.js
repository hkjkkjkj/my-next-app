
const fs = require('fs');
const path = require('path');

const alternatives = [
    'trending/arknights-endfield.png',
    'trending/assassins-creed-valhalla.png',
    'epic-form-epic-first-run/back-4-blood.jpg',
    'epic-form-epic-first-run/batman-arkham-knight.png',
    'images/arknights-endfield.png'
];

let output = '--- ALT PATH CHECK ---\n';

alternatives.forEach(relPath => {
    const absPath = path.join(__dirname, 'public', relPath);
    const exists = fs.existsSync(absPath);
    output += `${relPath}: ${exists ? 'YES' : 'NO'}\n`;
});

fs.writeFileSync('check_alt_results.txt', output);
console.log('Done');
