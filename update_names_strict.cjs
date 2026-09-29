const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

// The safest way is to just do basic string replacements for exactly what we see.

// For pic100 in products:
// id: "p99",
// name: "Tussar Jori Hand print design with blouse piece",
// category: "Tasar Saris",
// image: "/images/pic100.jpeg",
content = content.replace(
  /name: "Tussar Jori Hand print design with blouse piece",\s*category: "Tasar Saris",\s*image: "\/images\/pic100\.jpeg"/g,
  `name: "Silk Kethe Hand print Sari",\n      category: "Silk Kethe Saris",\n      image: "/images/pic100.jpeg"`
);

// For pic100 in gallery:
// { type: "image", src: "/images/pic100.jpeg", category: "Tasar Saris", name: "Tussar Jori Hand print design with blouse piece | ₹4000" },
content = content.replace(
  /\{ type: "image", src: "\/images\/pic100\.jpeg", category: "Tasar Saris", name: "Tussar Jori Hand print design with blouse piece \| [^"]+" \}/g,
  `{ type: "image", src: "/images/pic100.jpeg", category: "Silk Kethe Saris", name: "Silk kethe Hand print Sari with blouse piece (6.30 meter) | ₹4000" }`
);

// For videos67 in gallery:
content = content.replace(
  /\{ type: "video", src: "\/videos\/videos67\.mp4", category: "[^"]+", name: "[^"]+" \}/g,
  `{ type: "video", src: "/videos/videos67.mp4", category: "Silk Kethe Saris", name: "Silk kethe Hand print Sari with blouse piece (6.30 meter) | ₹4000" }`
);

// Fallback manual replacement if the regex didn't catch the exact format for videos67:
if (content.includes('videos67')) {
    // just replacing any line with videos67 inside the gallery
    content = content.replace(
        /\{[^}]*videos67\.mp4[^}]*\}/g,
        `{ type: "video", src: "/videos/videos67.mp4", category: "Silk Kethe Saris", name: "Silk kethe Hand print Sari with blouse piece (6.30 meter) | ₹4000" }`
    );
}
// Fallback for pic100 in gallery
if (content.includes('pic100.jpeg')) {
    content = content.replace(
        /\{ type: "image", src: "\/images\/pic100\.jpeg"[^}]*\}/g,
        `{ type: "image", src: "/images/pic100.jpeg", category: "Silk Kethe Saris", name: "Silk kethe Hand print Sari with blouse piece (6.30 meter) | ₹4000" }`
    );
}

fs.writeFileSync(file, content, 'utf8');
console.log("Updated siteData.js with specific replacements.");
