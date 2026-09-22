const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

// Use regex to find all product ids
const idRegex = /id:\s*"([^"]+)"/g;
let matches;
let seen = new Set();
let duplicates = [];

while ((matches = idRegex.exec(content)) !== null) {
  let id = matches[1];
  if (seen.has(id)) {
    duplicates.push(id);
  }
  seen.add(id);
}

if (duplicates.length > 0) {
  console.log('Duplicate product IDs found:');
  console.log(duplicates.join(', '));
} else {
  console.log('No duplicate product IDs.');
}
