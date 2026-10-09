const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

const productsBlock = `      {
        id: "p107",
        name: "Single Ply pure Murshidabad Silk Saree",
        category: "Single ply pure Murshidabad Silk saris",
        image: "/images/pic107.jpeg",
        description: "Single Ply pure Murshidabad Silk Saree",
        fabric: "Murshidabad Silk",
        dimensions: "5.5 meter",
        care: "Dry clean only",
        price: "₹3,000"
      },
      {
        id: "p108",
        name: "Gachi Tussar Brush paint hand print saree (with blouse piece)",
        category: "Tasar Saris",
        image: "/images/pic108.jpeg",
        description: "Gachi Tussar Brush paint hand print saree (with blouse piece)",
        fabric: "Gachi Tussar",
        dimensions: "6.30 meter",
        care: "Dry clean only",
        price: "₹4,800"
      }`;

const galleryBlock = `      { type: "image", src: "/images/pic107.jpeg", category: "Single ply pure Murshidabad Silk saris", name: "Single Ply pure Murshidabad Silk Saree | ₹3000" },
      { type: "image", src: "/images/pic108.jpeg", category: "Tasar Saris", name: "Gachi Tussar Brush paint hand print saree (with blouse piece) | ₹4800" }`;

// Find where products array ends (usually right before `  gallery: [`)
const productsEndIndex = content.indexOf('  gallery: [');
if (productsEndIndex !== -1 && !content.includes('pic107.jpeg')) {
    const productsEndMatch = content.lastIndexOf('    },', productsEndIndex);
    if (productsEndMatch !== -1) {
        content = content.slice(0, productsEndMatch) + '    },\n' + productsBlock + ',' + content.slice(productsEndMatch + 6);
    } else {
        const productsBracketEnd = content.lastIndexOf('  ],', productsEndIndex);
        content = content.slice(0, productsBracketEnd) + ',\n' + productsBlock + '\n' + content.slice(productsBracketEnd);
    }
}

// Find where gallery array ends (usually right before `  heroSlides:`)
const galleryEndIndex = content.indexOf('  heroSlides:');
if (galleryEndIndex !== -1 && !content.includes('src: "/images/pic107.jpeg"')) {
    const galleryBracketEnd = content.lastIndexOf('  ],', galleryEndIndex);
    content = content.slice(0, galleryBracketEnd) + ',\n' + galleryBlock + '\n' + content.slice(galleryBracketEnd);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Added pic107, pic108 to products and gallery arrays.");
