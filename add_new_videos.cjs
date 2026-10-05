const fs = require('fs');
const path = require('path');

// 1. Update siteData.js
const siteDataFile = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(siteDataFile, 'utf8');

const galleryBlock = `      { type: "video", src: "/videos/videos70.mp4", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece) | ₹4000" },
      { type: "video", src: "/videos/videos71.mp4", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece) | ₹4000" },
      { type: "video", src: "/videos/videos72.mp4", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Hand Buttick print (with blouse piece) | ₹4200" }`;

const galleryEndIndex = content.indexOf('  heroSlides:');
if (galleryEndIndex !== -1 && !content.includes('src: "/videos/videos70.mp4"')) {
    const galleryBracketEnd = content.lastIndexOf('  ],', galleryEndIndex);
    content = content.slice(0, galleryBracketEnd) + ',\n' + galleryBlock + '\n' + content.slice(galleryBracketEnd);
    fs.writeFileSync(siteDataFile, content, 'utf8');
    console.log("Added videos70, videos71, videos72 to gallery.");
} else {
    console.log("Videos already added or could not find insertion point.");
}

// 2. Update ProductModal.jsx for mute/unmute
const modalFile = 'd:/Deso office workspace/The Kamala slik/src/components/common/ProductModal.jsx';
let modalContent = fs.readFileSync(modalFile, 'utf8');

const updatedModalContent = modalContent.replace(/videos\(\?:67\|68\|69\)/g, "videos(?:67|68|69|70|71|72)");
if (updatedModalContent !== modalContent) {
    fs.writeFileSync(modalFile, updatedModalContent, 'utf8');
    console.log("Updated ProductModal.jsx to include new videos in mute/unmute logic.");
}

