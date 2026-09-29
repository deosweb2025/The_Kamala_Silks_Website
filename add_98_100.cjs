const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

const newItems = [
  {
    pic: "pic98",
    name: "Muga Tussar Sari with blouse piece",
    price: "4800",
    dim: "6.30 meter",
    cat: "Tasar Saris",
    fab: "Muga Tussar"
  },
  {
    pic: "pic99",
    name: "Tussar Jori Hand print design with blouse piece",
    price: "5200",
    dim: "6.30 meter",
    cat: "Tasar Saris",
    fab: "Tussar Jori"
  },
  {
    pic: "pic100",
    name: "Tussar Jori Hand print design with blouse piece",
    price: "4000",
    dim: "6.30 meter",
    cat: "Tasar Saris",
    fab: "Tussar Jori"
  }
];

let maxId = 0;
const idRegex = /id:\s*"p(\d+)"/g;
let match;
while ((match = idRegex.exec(content)) !== null) {
  const idNum = parseInt(match[1], 10);
  if (idNum > maxId) maxId = idNum;
}

let prodInsert = [];
let galInsert = [];

newItems.forEach((item, idx) => {
  let pId = 'p' + (maxId + 1 + idx);
  let desc = 'Elegant ' + item.name + '.';
  let priceStr = '₹' + item.price;
  
  prodInsert.push('    {\n      id: "' + pId + '",\n      name: "' + item.name + '",\n      category: "' + item.cat + '",\n      image: "/images/' + item.pic + '.jpeg",\n      description: "' + desc + '",\n      fabric: "' + item.fab + '",\n      dimensions: "' + item.dim + '",\n      care: "Dry clean only",\n      price: "' + priceStr + '"\n    }');
  
  galInsert.push('    { type: "image", src: "/images/' + item.pic + '.jpeg", category: "' + item.cat + '", name: "' + item.name + ' | ' + priceStr + '" }');
});

content = content.replace(/\s*\],\s*gallery:\s*\[/, () => {
    return ',\n' + prodInsert.join(',\n') + '\n  ],\n\n  gallery: [\n';
});

content = content.replace(/\s*\{\s*type:\s*"video",\s*src:\s*"\/videos\/video1\.mp4"/, () => {
    return '\n' + galInsert.join(',\n') + ',\n    { type: "video", src: "/videos/video1.mp4"';
});

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully appended pic98, pic99, pic100.');
