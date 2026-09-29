const fs = require('fs');
const file = 'd:/Deso office workspace/The Kamala slik/src/components/common/ProductModal.jsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('VolumeX')) {
    content = content.replace(
        /import \{ (.*?) \} from 'lucide-react';/,
        import { $1, Volume2, VolumeX } from 'lucide-react';
    );
}

if (!content.includes('isMuted')) {
    content = content.replace(
        /const \[addedProductId, setAddedProductId\] = useState\(null\);/,
        const [addedProductId, setAddedProductId] = useState(null);\n  const [isMuted, setIsMuted] = useState(true);
    );
}

const oldVideo =               {type === "gallery" && product.type === "video" ? (
                <video 
                  ref={(el) => { 
                    if (el) {
                      el.muted = true;
                      el.volume = 0;
                    }
                  }}
                  onVolumeChange={(e) => {
                    e.target.muted = true;
                    e.target.volume = 0;
                  }}
                  onPlay={(e) => {
                    e.target.muted = true;
                    e.target.volume = 0;
                  }}
                  onLoadedMetadata={(e) => {
                    e.target.muted = true;
                    e.target.volume = 0;
                  }}
                  src={product.src} 
                  className="w-full h-full object-contain max-h-[45vh] md:max-h-[80vh]"
                  controls 
                  controlsList="nodownload"
                  autoPlay
                  muted
                  defaultMuted
                  playsInline
                  preload="metadata"
                />
              ) : (

const newVideo =               {type === "gallery" && product.type === "video" ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video 
                    ref={(el) => { 
                      if (el) {
                        const isVideo67 = product.src && product.src.includes('videos67');
                        if (isVideo67) {
                          el.muted = isMuted;
                          el.volume = isMuted ? 0 : 1;
                        } else {
                          el.muted = true;
                          el.volume = 0;
                        }
                      }
                    }}
                    onVolumeChange={(e) => {
                      const isVideo67 = product.src && product.src.includes('videos67');
                      if (!isVideo67) {
                        e.target.muted = true;
                        e.target.volume = 0;
                      }
                    }}
                    src={product.src} 
                    className="w-full h-full object-contain max-h-[45vh] md:max-h-[80vh]"
                    controls={product.src && product.src.includes('videos67')}
                    controlsList="nodownload"
                    autoPlay
                    playsInline
                    preload="metadata"
                  />
                  {product.src && product.src.includes('videos67') && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="absolute bottom-4 right-4 z-[90] bg-black/80 hover:bg-black text-white px-5 py-2.5 rounded-full shadow-xl backdrop-blur-md border border-white/30 flex items-center gap-2 transition-all font-bold text-sm"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      {isMuted ? "Unmute" : "Mute"}
                    </button>
                  )}
                </div>
              ) : (

if (content.includes(oldVideo)) {
    content = content.replace(oldVideo, newVideo);
} else {
    console.log("Could not find oldVideo block to replace.");
}

fs.writeFileSync(file, content, 'utf8');
console.log("ProductModal updated successfully.");
