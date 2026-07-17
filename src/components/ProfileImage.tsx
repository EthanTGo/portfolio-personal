import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

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
      {/* Main image container */}
      <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-100 relative shadow-inner">
        <img 
          src={resolveUrl(imgSrc || "https://github.com/EthanTGo.png")} 
          alt="Ethan Go" 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          onError={handleImageError}
          referrerPolicy="no-referrer"
        />

        {/* Decorative Corner Sparkle */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg pointer-events-none">
          <Sparkles size={16} className="text-ghibli-pink" />
        </div>
      </div>
    </div>
  );
}
