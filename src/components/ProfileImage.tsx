import React, { useState, useEffect, useRef } from "react";
import { Camera, Upload, Link2, RotateCcw, X, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProfileImageProps {
  className?: string;
  allowEdit?: boolean;
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

export default function ProfileImage({ className = "", allowEdit = true }: ProfileImageProps) {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [fallbackIndex, setFallbackIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync state with localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("ethan_profile_photo");
    if (saved) {
      setImgSrc(saved);
    } else {
      setImgSrc(FALLBACKS[0]);
    }
  }, []);

  // Sync external changes (e.g., if multiple instances exist)
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem("ethan_profile_photo");
      if (saved) {
        setImgSrc(saved);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
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

  const savePhoto = (src: string) => {
    localStorage.setItem("ethan_profile_photo", src);
    setImgSrc(src);
    // Dispatch a storage event so all instances update immediately
    window.dispatchEvent(new Event("storage"));
    setShowModal(false);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      savePhoto(urlInput.trim());
      setUrlInput("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }
    // Limit file size to 3MB for localStorage
    if (file.size > 3 * 1024 * 1024) {
      alert("Please upload an image under 3MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        savePhoto(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const resetToDefault = () => {
    localStorage.removeItem("ethan_profile_photo");
    setFallbackIndex(0);
    setImgSrc(FALLBACKS[0]);
    window.dispatchEvent(new Event("storage"));
    setShowModal(false);
  };

  return (
    <>
      <div 
        className={`relative group ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main image container */}
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-100 relative shadow-inner">
          <img 
            src={resolveUrl(imgSrc || "https://github.com/EthanTGo.png")} 
            alt="Ethan Go" 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            onError={handleImageError}
            referrerPolicy="no-referrer"
          />

          {/* Edit Button overlay */}
          {allowEdit && (
            <AnimatePresence>
              {isHovered && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowModal(true)}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300"
                >
                  <div className="p-3 bg-white/20 rounded-full border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
                    <Camera size={24} className="text-white" />
                  </div>
                  <span className="text-xs bg-black/30 px-3 py-1 rounded-full">Update Photo</span>
                </motion.button>
              )}
            </AnimatePresence>
          )}

          {/* Decorative Corner Sparkle */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg pointer-events-none">
            <Sparkles size={16} className="text-ghibli-pink" />
          </div>
        </div>
      </div>

      {/* Elegant Settings Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-ghibli-ink/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-[2.5rem] shadow-2xl border border-ghibli-ink/5 max-w-md w-full overflow-hidden relative z-10 p-8 space-y-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-2 border-b border-ghibli-ink/5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ghibli-ink">Profile Photo Settings</h3>
                  <p className="text-xs text-ghibli-ink/50 mt-0.5">Customize your display picture cleanly.</p>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 rounded-full bg-ghibli-ink/5 hover:bg-ghibli-pink/10 hover:text-ghibli-pink flex items-center justify-center transition-colors text-ghibli-ink/60"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drag & Drop File Upload Area */}
              <div 
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${dragActive ? 'border-ghibli-pink bg-ghibli-pink/5' : 'border-ghibli-ink/10 hover:border-ghibli-pink/50 hover:bg-ghibli-pink/5'}`}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                <div className="w-12 h-12 rounded-full bg-ghibli-pink/10 text-ghibli-pink flex items-center justify-center">
                  <Upload size={20} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-ghibli-ink">Upload a local file</p>
                  <p className="text-xs text-ghibli-ink/50 mt-1">Drag & drop or click to browse</p>
                </div>
              </div>

              {/* Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-ghibli-ink/5"></div>
                <span className="flex-shrink mx-4 text-xs font-bold uppercase tracking-widest text-ghibli-ink/30">OR</span>
                <div className="flex-grow border-t border-ghibli-ink/5"></div>
              </div>

              {/* URL Input Form */}
              <form onSubmit={handleUrlSubmit} className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-ghibli-ink/60 flex items-center gap-1.5">
                  <Link2 size={14} className="text-ghibli-pink" />
                  Image URL
                </label>
                <div className="flex gap-2">
                  <input 
                    type="url" 
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com/your-photo.jpg" 
                    className="flex-1 bg-ghibli-ink/5 border-0 focus:ring-2 focus:ring-ghibli-pink rounded-2xl px-4 py-3 text-sm focus:outline-none"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-5 bg-ghibli-ink hover:bg-ghibli-pink text-white rounded-2xl font-bold transition-colors flex items-center justify-center shadow-md shadow-ghibli-ink/5"
                  >
                    <Check size={18} />
                  </button>
                </div>
              </form>

              {/* Reset Default Button */}
              <div className="pt-4 border-t border-ghibli-ink/5 flex gap-4">
                <button 
                  onClick={resetToDefault}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-ghibli-pink/10 hover:bg-ghibli-pink hover:text-white text-ghibli-pink rounded-2xl text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  <RotateCcw size={14} />
                  Reset to Default GitHub
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
