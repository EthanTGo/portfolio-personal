import React from 'react';
import watercolorAutumnCanopy from '../assets/images/watercolor_autumn_canopy_1792270109959.jpg';
import pureFallTreesCanopy from '../assets/images/pure_fall_trees_canopy_1792269825123.jpg';

export interface FallBackgroundProps {
  style?: 'watercolor' | 'realistic';
}

/**
 * FallBackground:
 * Renders the colorful autumn canopy background across the top section
 * with vibrant scarlet red, orange, and golden yellow maple branches.
 * The main tree next to the profile picture has been removed per user request,
 * keeping the portrait area clean while preserving the atmospheric top canopy.
 */
export default function FallBackground({ style = 'watercolor' }: FallBackgroundProps) {
  const isWatercolor = style === 'watercolor';

  return (
    <div 
      className="absolute top-0 left-0 right-0 w-full overflow-hidden pointer-events-none select-none z-0"
      style={{ height: '700px' }}
      aria-hidden="true"
    >
      {/* 1. Panoramic Top Canopy of Autumn Trees (Overhanging red, orange & golden yellow fall branches) */}
      <div 
        className={`absolute top-0 left-0 right-0 h-[400px] sm:h-[460px] md:h-[520px] w-full overflow-hidden transition-opacity duration-700 ${
          isWatercolor ? 'opacity-85 mix-blend-multiply' : 'opacity-40'
        }`}
      >
        <img
          src={isWatercolor ? watercolorAutumnCanopy : pureFallTreesCanopy}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top scale-105 filter saturate-[1.08] contrast-[1.02]"
        />
        
        {/* Soft atmospheric warm sunlight glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/25 via-orange-50/15 to-transparent pointer-events-none" />

        {/* Seamless vertical fade into the clean ivory (#FCFAF6) canvas */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(252, 250, 246, 0.05) 0%, rgba(252, 250, 246, 0.20) 25%, rgba(252, 250, 246, 0.65) 60%, rgba(252, 250, 246, 0.95) 86%, #FCFAF6 100%)',
          }}
        />

        {/* Readability radial wash over the left column text & bio */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 75% 70% at 24% 45%, rgba(252, 250, 246, 0.94) 0%, rgba(252, 250, 246, 0.55) 55%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. Soft ambient warm sunlight glow */}
      <div 
        className="absolute top-20 left-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-br from-amber-200/25 via-orange-200/15 to-transparent blur-3xl pointer-events-none" 
      />

      {/* 3. Bottom boundary gradient ensuring seamless transition to portfolio content */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#FCFAF6] via-[#FCFAF6]/90 to-transparent pointer-events-none" />
    </div>
  );
}
