const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /image: "\/images\/pic100\.jpeg",\s*description: "[^"]+",\s*fabric: "[^"]+",/g,
  `image: "/images/pic100.jpeg",\n      description: "Silk kethe Hand print Sari with blouse piece (6.30 meter).",\n      fabric: "Silk Kethe",`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Updated product details for pic100.");
