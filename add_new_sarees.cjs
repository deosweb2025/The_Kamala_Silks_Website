const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

const productsBlock = `      {
        id: "p101",
        name: "Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece)",
        category: "Double ply pure Murshidabad Silk saris",
        image: "/images/pic101.jpeg",
        description: "Elegant Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece).",
        fabric: "Murshidabad Silk",
        dimensions: "6.30 meter",
        care: "Dry clean only",
        price: "₹4,000"
      },
      {
        id: "p102",
        name: "Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece)",
        category: "Double ply pure Murshidabad Silk saris",
        image: "/images/pic102.jpeg",
        description: "Elegant Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece).",
        fabric: "Murshidabad Silk",
        dimensions: "6.30 meter",
        care: "Dry clean only",
        price: "₹4,000"
      },
      {
        id: "p103",
        name: "Double ply Murshidabad Silk Saree Hand Buttick print (with blouse piece)",
        category: "Double ply pure Murshidabad Silk saris",
        image: "/images/pic103.jpeg",
        description: "Elegant Double ply Murshidabad Silk Saree Hand Buttick print (with blouse piece).",
        fabric: "Murshidabad Silk",
        dimensions: "6.30 meter",
        care: "Dry clean only",
        price: "₹4,200"
      }`;

const galleryBlock = `      { type: "image", src: "/images/pic101.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece) | ₹4000" },
      { type: "image", src: "/images/pic102.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Acid print Saree (with blouse piece) | ₹4000" },
      { type: "image", src: "/images/pic103.jpeg", category: "Double ply pure Murshidabad Silk saris", name: "Double ply Murshidabad Silk Saree Hand Buttick print (with blouse piece) | ₹4200" }`;

// Find where products array ends (usually right before `  gallery: [`)
const productsEndIndex = content.indexOf('  gallery: [');
if (productsEndIndex !== -1 && !content.includes('pic101.jpeg')) {
    const productsEndMatch = content.lastIndexOf('    },', productsEndIndex);
    if (productsEndMatch !== -1) {
        // Insert right after the last product object (we replace `    },` with `    },\n${productsBlock},`)
        content = content.slice(0, productsEndMatch) + '    },\n' + productsBlock + ',' + content.slice(productsEndMatch + 6);
    } else {
        // If it doesn't end with a comma
        const productsBracketEnd = content.lastIndexOf('  ],', productsEndIndex);
        content = content.slice(0, productsBracketEnd) + ',\n' + productsBlock + '\n' + content.slice(productsBracketEnd);
    }
}

// Find where gallery array ends (usually right before `  heroSlides:`)
const galleryEndIndex = content.indexOf('  heroSlides:');
if (galleryEndIndex !== -1 && !content.includes('src: "/images/pic101.jpeg"')) {
    const galleryBracketEnd = content.lastIndexOf('  ],', galleryEndIndex);
    content = content.slice(0, galleryBracketEnd) + ',\n' + galleryBlock + '\n' + content.slice(galleryBracketEnd);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Added pic101, pic102, pic103 to products and gallery arrays.");
