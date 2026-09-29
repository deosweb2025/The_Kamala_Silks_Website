const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

const newVideo = '    { type: "video", src: "/videos/videos67.mp4", category: "Tasar Saris", name: "Tussar Jori Hand print design with blouse piece | ₹4000" }';

content = content.replace(/\s*\]\n\};\s*export const sareeCategories/, () => {
    return ',\n' + newVideo + '\n  ]\n};\n\nexport const sareeCategories';
});

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully appended videos67.');
