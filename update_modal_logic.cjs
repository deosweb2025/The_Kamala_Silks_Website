const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/components/common/ProductModal.jsx';
let content = fs.readFileSync(file, 'utf8');

// The logic inside ProductModal currently uses:
// product.src.includes('videos67')
// I need to replace that with a regex or function.

let newContent = content.replace(/product\.src\.includes\('videos67'\)/g, "product.src.match(/videos(?:67|68|69)/)");

if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log("Updated ProductModal.jsx");
} else {
    console.log("No changes made to ProductModal.jsx. Checking if it's already updated or uses different logic.");
}
