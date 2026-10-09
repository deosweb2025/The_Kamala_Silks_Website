const fs = require('fs');
const path = require('path');

// 1. Update siteData.js
const siteDataFile = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(siteDataFile, 'utf8');

const galleryBlock = `      { type: "video", src: "/videos/videos76.mp4", category: "Single ply pure Murshidabad Silk saris", name: "Single Ply pure Murshidabad Silk Saree | ₹3000" },
      { type: "video", src: "/videos/videos77.mp4", category: "Tasar Saris", name: "Gachi Tussar Brush paint hand print saree (with blouse piece) | ₹4800" }`;

const galleryEndIndex = content.indexOf('  heroSlides:');
if (galleryEndIndex !== -1 && !content.includes('src: "/videos/videos76.mp4"')) {
    const galleryBracketEnd = content.lastIndexOf('  ],', galleryEndIndex);
    content = content.slice(0, galleryBracketEnd) + ',\n' + galleryBlock + '\n' + content.slice(galleryBracketEnd);
    fs.writeFileSync(siteDataFile, content, 'utf8');
    console.log("Added videos76 and videos77 to gallery.");
} else {
    console.log("Videos already added or could not find insertion point.");
}

// 2. Update ProductModal.jsx for mute/unmute
const modalFile = 'd:/Deso office workspace/The Kamala slik/src/components/common/ProductModal.jsx';
let modalContent = fs.readFileSync(modalFile, 'utf8');

const updatedModalContent = modalContent.replace(/videos\(\?:67\|68\|69\|70\|71\|72\|73\|74\|75\)/g, "videos(?:67|68|69|70|71|72|73|74|75|76|77)");
if (updatedModalContent !== modalContent) {
    fs.writeFileSync(modalFile, updatedModalContent, 'utf8');
    console.log("Updated ProductModal.jsx to include new videos in mute/unmute logic.");
}

