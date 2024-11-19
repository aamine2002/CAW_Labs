const fs = require('fs');

const filename = process.argv[2];
const text = process.argv[3];

if (!filename || !text) {
    console.error('Please provide both filename and text as arguments');
    process.exit(1);
}

try {
    // Write to file
    fs.writeFileSync(filename, text);
    console.log('The file has been saved!');
    
    // Read and display the content
    const content = fs.readFileSync(filename, 'utf8');
    console.log('\nFile contents:');
    console.log(content);
} catch (err) {
    console.error('Error:', err.message);
} 