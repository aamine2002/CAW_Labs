const fs = require('fs');

const filename = process.argv[2];

try {
    const content = fs.readFileSync(filename, 'utf8');
    console.log(content);
} catch (err) {
    console.error('Error reading file:', err.message);
} 