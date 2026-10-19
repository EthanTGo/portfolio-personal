export default function BudsLabLogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 540 160" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="BUDS Lab - Building and Urban Data Science"
    >
      <rect width="100%" height="100%" fill="white" />
      <polyline 
        points="58,68 152,36 218,68" 
        fill="none" 
        stroke="#F37021" 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g fill="#050505" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="82" letterSpacing="-1.5">
        <text x="14" y="98">b</text>
        <text x="96" y="98">u</text>
        <text x="174" y="98">d</text>
        <text x="248" y="98">s</text>
        <text x="338" y="98">lab</text>
      </g>
      <circle cx="58" cy="68" r="16" fill="#004B87" />
      <circle cx="58" cy="68" r="8" fill="#FFFFFF" />
      <circle cx="152" cy="36" r="14" fill="#004B87" />
      <circle cx="152" cy="36" r="7" fill="#FFFFFF" />
      <circle cx="218" cy="68" r="16" fill="#004B87" />
      <circle cx="218" cy="68" r="8" fill="#FFFFFF" />
      <text 
        x="14" 
        y="136" 
        fill="#050505" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontWeight="500" 
        fontSize="25.5" 
        letterSpacing="-0.5"
      >
        building and urban data science
      </text>
    </svg>
  );
}
