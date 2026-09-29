const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/data/siteData.js';
let content = fs.readFileSync(file, 'utf8');

// Update pic100
// It currently looks something like:
// { type: "image", src: "/images/pic100.jpeg", category: "Tasar Saris", name: "Tussar Jori Hand print design", price: "₹4,000", ... }
// OR it's inside `products` and `gallery`.

// Let's do a robust replacement for both arrays (gallery and products)
function updateItem(str, srcSearch, newName, newPrice, newDesc, newCat) {
    const regex = new RegExp(`(\\{[^}]*src:\\s*['"][^'"]*${srcSearch}['"][^}]*\\})`, 'g');
    // For products array, it uses `image:` instead of `src:`
    const regexProd = new RegExp(`(\\{[^}]*image:\\s*['"][^'"]*${srcSearch}['"][^}]*\\})`, 'g');
    
    function replacer(match) {
        let updated = match;
        updated = updated.replace(/name:\s*['"][^'"]*['"]/, `name: "${newName}"`);
        updated = updated.replace(/price:\s*['"][^'"]*['"]/, `price: "${newPrice}"`);
        if (updated.includes('description:')) {
            updated = updated.replace(/description:\s*['"][^'"]*['"]/, `description: "${newDesc}"`);
        }
        if (updated.includes('category:')) {
             // Maybe update category if needed, but let's keep it as "Silk Kethe Saris" based on name
            updated = updated.replace(/category:\s*['"][^'"]*['"]/, `category: "${newCat}"`);
        }
        return updated;
    }

    let result = str.replace(regex, replacer);
    result = result.replace(regexProd, replacer);
    return result;
}

content = updateItem(content, "pic100", "Silk Kethe Hand print Sari", "₹4,000", "Silk kethe Hand print Sari with blouse piece (6.30 meter)", "Silk Kethe Saris");
content = updateItem(content, "videos67", "Silk Kethe Hand print Sari", "₹4,000", "Silk kethe Hand print Sari with blouse piece (6.30 meter)", "Silk Kethe Saris");

fs.writeFileSync(file, content, 'utf8');
console.log("Updated siteData.js for pic100 and videos67");
