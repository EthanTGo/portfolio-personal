import React, { useState, useEffect } from "react";
import { MapleLeafIcon } from "./AutumnLeaves";

interface ProfileImageProps {
  className?: string;
}

const FALLBACKS = [
  "https://github.com/EthanTGo.png",
  "/ethango.jpeg",
  "/ethan_go.jpg"
];

const resolveUrl = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:")) {
    return url;
  }
  const cleanUrl = url.startsWith("/") ? url.slice(1) : url;
  return `${import.meta.env.BASE_URL}${cleanUrl}`;
};

export default function ProfileImage({ className = "" }: ProfileImageProps) {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [fallbackIndex, setFallbackIndex] = useState(0);

  // Sync state with FALLBACKS on mount
  useEffect(() => {
    setImgSrc(FALLBACKS[0]);
  }, []);

  const handleImageError = () => {
    // If the current image fails to load, try the next fallback
    if (fallbackIndex < FALLBACKS.length - 1) {
      const nextIndex = fallbackIndex + 1;
      setFallbackIndex(nextIndex);
      setImgSrc(FALLBACKS[nextIndex]);
    } else {
      // If all fallbacks fail, reset to github and don't loop endlessly
      setImgSrc("https://github.com/EthanTGo.png");
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Main image container with warm autumn shadow */}
      <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-amber-50/40 relative shadow-inner">
        <img 
          src={resolveUrl(imgSrc || "https://github.com/EthanTGo.png")} 
          alt="Ethan Go" 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          onError={handleImageError}
          referrerPolicy="no-referrer"
        />

        {/* Decorative Corner Autumn Leaf Badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-amber-200/60 pointer-events-none transition-transform group-hover:scale-110 duration-300">
          <MapleLeafIcon size={18} color="#C0392B" className="drop-shadow-sm" />
        </div>
      </div>
    </div>
  );
}
