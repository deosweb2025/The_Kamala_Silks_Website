const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'src', 'data', 'siteData.js');
let content = fs.readFileSync(siteDataPath, 'utf8');

// Use regex to find all src and image fields
const srcRegex = /src:\s*"([^"]+)"/g;
const imgRegex = /image:\s*"([^"]+)"/g;

let missing = [];
let matches;

while ((matches = srcRegex.exec(content)) !== null) {
  let file = matches[1];
  let fullPath = path.join(__dirname, 'public', file);
  if (!fs.existsSync(fullPath)) {
    missing.push(file);
  }
}

while ((matches = imgRegex.exec(content)) !== null) {
  let file = matches[1];
  let fullPath = path.join(__dirname, 'public', file);
  if (!fs.existsSync(fullPath)) {
    missing.push(file);
  }
}

if (missing.length > 0) {
  console.log('Missing files referenced in siteData.js:');
  missing.forEach(m => console.log(m));
} else {
  console.log('All files referenced in siteData.js exist in the public directory.');
}
