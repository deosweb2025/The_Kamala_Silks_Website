const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

const productsBlock = `      {
        id: "p104",
        name: "Double Ply Murshidabad Silk Hand buttick print (with blouse piece)",
        category: "Double ply pure Murshidabad Silk saris",
        image: "/images/pic104.jpeg",
        description: "Double Ply Murshidabad Silk Hand buttick print (with blouse piece)",
        fabric: "Murshidabad Silk",
        dimensions: "6.30 meter",
        care: "Dry clean only",
        price: "₹4,200"
      },
      {
        id: "p105",
        name: "Gachi Tussar Acid hand print saree (with blouse piece)",
        category: "Tasar Saris",
        image: "/images/pic105.jpeg",
        description: "Gachi Tussar Acid hand print saree (with blouse piece)",
        fabric: "Gachi Tussar",
        dimensions: "6.30 meter",
        care: "Dry clean only",
        price: "₹4,800"
      },
      {
        id: "p106",
        name: "Double Ply Murshidabad Silk Hand buttick print (with blouse piece)",
        category: "Double ply pure Murshidabad Silk saris",
        image: "/images/pic106.jpeg",
        description: "Double Ply Murshidabad Silk Hand buttick print (with blouse piece)",
        fabric: "Murshidabad Silk",
        dimensions: "6.30 meter",
        care: "Dry clean only",
        price: "₹4,200"
      }`;

const galleryBlock = `      { type: "image", src: "/images/pic104.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double Ply Murshidabad Silk Hand buttick print (with blouse piece) | ₹4200" },
      { type: "image", src: "/images/pic105.jpeg", category: "Tasar Saris", name: "Gachi Tussar Acid hand print saree (with blouse piece) | ₹4800" },
      { type: "image", src: "/images/pic106.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double Ply Murshidabad Silk Hand buttick print (with blouse piece) | ₹4200" }`;

// Find where products array ends (usually right before `  gallery: [`)
const productsEndIndex = content.indexOf('  gallery: [');
if (productsEndIndex !== -1 && !content.includes('pic104.jpeg')) {
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
if (galleryEndIndex !== -1 && !content.includes('src: "/images/pic104.jpeg"')) {
    const galleryBracketEnd = content.lastIndexOf('  ],', galleryEndIndex);
    content = content.slice(0, galleryBracketEnd) + ',\n' + galleryBlock + '\n' + content.slice(galleryBracketEnd);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Added pic104, pic105, pic106 to products and gallery arrays.");
