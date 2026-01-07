
const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
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

fs.writeFileSync('all_files.txt', allFiles.join('\n'));
console.log(`Listed ${allFiles.length} files.`);
