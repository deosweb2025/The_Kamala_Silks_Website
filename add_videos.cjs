const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

const video68 = `
    {
      type: "video",
      src: "/videos/videos68.mp4",
      category: "Tasar Saris",
      name: "Tussar Jori Hand print design",
      price: "₹5,200",
      description: "Tussar Jori Hand print design with blouse piece (6.30 meter)",
      fabric: "Tussar Silk",
      care: "Dry clean only"
    },`;

const video69 = `
    {
      type: "video",
      src: "/videos/videos69.mp4",
      category: "Tasar Saris",
      name: "Muga Tussar Sari",
      price: "₹4,800",
      description: "Muga Tussar Sari with blouse piece (6.30 meter)",
      fabric: "Muga Tussar Silk",
      care: "Dry clean only"
    }`;

// Find the end of the gallery array. The gallery array ends right before `  ],\n  heroSlides:` or similar.
const insertionPoint = content.lastIndexOf('  ],\n  heroSlides:');

if (insertionPoint !== -1 && !content.includes('videos68.mp4')) {
    // Insert right before the closing bracket of the gallery array
    const before = content.substring(0, insertionPoint);
    const after = content.substring(insertionPoint);
    // Check if there is a trailing comma on the last item
    const hasTrailingComma = before.trim().endsWith(',');
    const newContent = before + (hasTrailingComma ? '' : ',') + video68 + video69 + '\n' + after;
    fs.writeFileSync(file, newContent, 'utf8');
    console.log("Added videos68 and videos69 to gallery.");
} else {
    console.log("Could not find insertion point or videos already exist.");
}
