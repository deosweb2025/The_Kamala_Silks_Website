const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/index.css';
let content = fs.readFileSync(file, 'utf8');

const oldCss = `/* Permanently hide volume and unmute controls across all video elements */
video::-webkit-media-controls-volume-control-container,
video::-webkit-media-controls-mute-button,
video::-webkit-media-controls-volume-slider {
  display: none !important;
}`;

const newCss = `/* Permanently hide volume and unmute controls across all video elements EXCEPT .allow-unmute */
video:not(.allow-unmute)::-webkit-media-controls-volume-control-container,
video:not(.allow-unmute)::-webkit-media-controls-mute-button,
video:not(.allow-unmute)::-webkit-media-controls-volume-slider {
  display: none !important;
}`;

if (content.includes(oldCss)) {
    content = content.replace(oldCss, newCss);
    fs.writeFileSync(file, content, 'utf8');
    console.log("index.css updated.");
} else {
    console.log("Could not find the css block to replace.");
}
