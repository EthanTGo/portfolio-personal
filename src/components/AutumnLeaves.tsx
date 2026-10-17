import React, { useMemo } from 'react';

export type LeafType = 'maple' | 'oak' | 'ginkgo' | 'aspen';

interface LeafSpec {
  id: number;
  type: LeafType;
  color: string;
  size: number;
  leftPercent: number;
  fallDuration: number;
  fallDelay: number;
  swayDuration: number;
  swayDelay: number;
  swayX: number;
  swayDeg: number;
  opacity: number;
}

/**
 * Authentic Japanese Momiji (7-pointed palmate maple) Leaf Icon
 * Modeled after the delicate crimson maple leaves in classic Japanese woodblock prints.
 */
export function MapleLeafIcon({ className = "", color = "currentColor", size = 24 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 7-lobed Momiji palmate leaf silhouette */}
      <path 
        d="M16 2C15.4 5.2 13.8 6.8 12.2 6.5C12.8 8.6 11 10.2 8.5 10.8C10.4 12 10.6 14 9.8 16.2C11.8 15.6 13 16.8 13.4 19.2C14.4 17.2 15.4 16.8 16 16.8C16.6 16.8 17.6 17.2 18.6 19.2C19 16.8 20.2 15.6 22.2 16.2C21.4 14 21.6 12 23.5 10.8C21 10.2 19.2 8.6 19.8 6.5C18.2 6.8 16.6 5.2 16 2Z" 
        fill={color} 
      />
      {/* Delicate vein network */}
      <path d="M16 7L16 23" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.8" />
      <path d="M16 12L11 9.5" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <path d="M16 12L21 9.5" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <path d="M16 15L12 14.5" stroke={color} strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      <path d="M16 15L20 14.5" stroke={color} strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      {/* Slender curved stem */}
      <path d="M16 20C16 24 15.2 27.5 13.5 29.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export const MomijiLeafIcon = MapleLeafIcon;

/**
 * Authentic Japanese Ginkgo Biloba Leaf Icon (Fan-shaped with center notch)
 */
export function GinkgoLeafIcon({ className = "", color = "currentColor", size = 24 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fan blade with central notch */}
      <path 
        d="M16 19C11.5 18 5 13.8 4 7.5C8.8 5.5 13 9.2 15.2 11.2C15.8 10.5 16.2 10.5 16.8 11.2C19 9.2 23.2 5.5 28 7.5C27 13.8 20.5 18 16 19Z" 
        fill={color} 
      />
      {/* Radiating vein lines */}
      <path d="M16 18C15 15 11 11 8 8" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M16 18C17 15 21 11 24 8" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M16 18L16 12" stroke={color} strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      {/* Slender stem */}
      <path d="M16 18C15.8 22 14.8 26 13.2 29" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function OakLeafIcon({ className = "", color = "currentColor", size = 24 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M16 3C14.5 4.5 12 5 11 6.8C10 8.5 11.5 10.2 10.5 12C9.5 13.8 8 15 8.5 17C9 19 11.2 19.5 11.8 21.2C12.4 23 13.5 24.5 16 24.5C18.5 24.5 19.6 23 20.2 21.2C20.8 19.5 23 19 23.5 17C24 15 22.5 13.8 21.5 12C20.5 10.2 22 8.5 21 6.8C20 5 17.5 4.5 16 3Z" 
        fill={color} 
      />
      <path d="M16 5L16 26" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <path d="M16 24C16 27 16.5 29 17.5 30.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function AspenLeafIcon({ className = "", color = "currentColor", size = 24 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M16 3C11 6 7 12 8 18C9 23 13 24 16 24C19 24 23 23 24 18C25 12 21 6 16 3Z" 
        fill={color} 
      />
      <path d="M16 6L16 24" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
      <path d="M16 23C16 26.5 16.8 28.5 17.5 30" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}


const FALL_COLORS = [
  // Vermilion Crimson & Momiji Red
  '#C0392B',
  '#B22222',
  '#991B1B',
  '#CB4335',
  // Burnt Persimmon & Fiery Orange
  '#D35400',
  '#E67E22',
  '#EA580C',
  '#D96B27',
  // Golden Ginkgo & Amber
  '#F39C12',
  '#F59E0B',
  '#D4AC0D',
  '#E5A124',
  '#B45309'
];

interface AutumnLeavesProps {
  paused?: boolean;
  burstTrigger?: number;
}

export default function AutumnLeaves({ paused = false, burstTrigger = 0 }: AutumnLeavesProps) {
  // Burst leaves spawned on demand
  const [burstLeaves, setBurstLeaves] = React.useState<LeafSpec[]>([]);

  React.useEffect(() => {
    if (!burstTrigger) return;
    const types: LeafType[] = ['maple', 'oak', 'ginkgo', 'aspen'];
    const newBatch: LeafSpec[] = [];
    const count = 12;
    const now = Date.now();

    for (let i = 0; i < count; i++) {
      const type = types[i % types.length];
      const color = FALL_COLORS[(i * 4 + 2) % FALL_COLORS.length];
      const leftPercent = 25 + Math.random() * 55;
      newBatch.push({
        id: now + i,
        type,
        color,
        size: 22 + Math.random() * 16,
        leftPercent,
        fallDuration: 6 + Math.random() * 5,
        fallDelay: Math.random() * 0.8,
        swayDuration: 2.2 + Math.random() * 2,
        swayDelay: 0,
        swayX: 30 + Math.random() * 30,
        swayDeg: 35 + Math.random() * 40,
        opacity: 0.75 + Math.random() * 0.25,
      });
    }

    setBurstLeaves(prev => [...prev.slice(-15), ...newBatch]);

    const timer = setTimeout(() => {
      setBurstLeaves(prev => prev.filter(l => !newBatch.some(nb => nb.id === l.id)));
    }, 12000);

    return () => clearTimeout(timer);
  }, [burstTrigger]);

  // Deterministic set of leaves drifting peacefully down
  const leaves: LeafSpec[] = useMemo(() => {
    const list: LeafSpec[] = [];
    const types: LeafType[] = ['maple', 'ginkgo', 'oak', 'maple'];
    const count = 22;

    for (let i = 0; i < count; i++) {
      const type = types[i % types.length];
      const color = FALL_COLORS[(i * 3 + 1) % FALL_COLORS.length];
      const baseCol = (i / count) * 94 + 3;
      const jitter = ((i * 17) % 7) - 3.5;
      const leftPercent = Math.max(2, Math.min(97, baseCol + jitter));

      const fallDuration = 13 + ((i * 2.3) % 11); // 13s - 24s
      const fallDelay = -1 * (((i * 4.7) % 18) + 1);

      const swayDuration = 3.8 + ((i * 1.3) % 3); // 3.8s - 6.8s
      const swayDelay = -1 * ((i * 1.9) % 5);
      const swayX = 22 + ((i * 7) % 28);
      const swayDeg = 20 + ((i * 11) % 35);
      const size = 20 + ((i * 5) % 15);
      const opacity = 0.45 + ((i * 3) % 35) / 100;

      list.push({
        id: i,
        type,
        color,
        size,
        leftPercent,
        fallDuration,
        fallDelay,
        swayDuration,
        swayDelay,
        swayX,
        swayDeg,
        opacity
      });
    }
    return list;
  }, []);

  if (paused) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-10 transition-opacity duration-700" 
      aria-hidden="true"
    >
      {[...leaves, ...burstLeaves].map((leaf) => {
        const style = {
          '--fall-duration': `${leaf.fallDuration}s`,
          '--fall-delay': `${leaf.fallDelay}s`,
          '--sway-duration': `${leaf.swayDuration}s`,
          '--sway-delay': `${leaf.swayDelay}s`,
          '--sway-x': `${leaf.swayX}px`,
          '--sway-deg': `${leaf.swayDeg}deg`,
          '--leaf-opacity': leaf.opacity,
          left: `${leaf.leftPercent}%`,
        } as React.CSSProperties;

        return (
          <div
            key={leaf.id}
            className="absolute -top-20 animate-leaf-fall will-change-transform"
            style={style}
          >
            <div className="animate-leaf-sway will-change-transform drop-shadow-[0_2px_4px_rgba(42,26,18,0.12)]">
              {leaf.type === 'maple' && (
                <MapleLeafIcon size={leaf.size} color={leaf.color} />
              )}
              {leaf.type === 'oak' && (
                <OakLeafIcon size={leaf.size} color={leaf.color} />
              )}
              {leaf.type === 'ginkgo' && (
                <GinkgoLeafIcon size={leaf.size} color={leaf.color} />
              )}
              {leaf.type === 'aspen' && (
                <AspenLeafIcon size={leaf.size} color={leaf.color} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
