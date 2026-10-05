const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

const target = '{ type: "image", src: "/images/pic103.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Hand Buttick print (with blouse piece) | ₹4200" }\n      { type: "video", src: "/videos/video1.mp4"';

const replacement = '{ type: "image", src: "/images/pic103.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Hand Buttick print (with blouse piece) | ₹4200" },\n      { type: "video", src: "/videos/video1.mp4"';

content = content.replace(target, replacement);
fs.writeFileSync(file, content, 'utf8');
console.log("Fixed comma.");
