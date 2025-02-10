'use client';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full font-mono">
      <div className="relative flex items-center justify-center">
        {/* Matrix-style scanning line effect */}
        <div className="absolute w-full h-16 bg-gradient-to-b from-transparent via-[#18e4a7]/10 to-transparent 
          animate-[scan_1.5s_ease-in-out_infinite] rounded-lg"/>
        
        {/* Main spinner with robotic feel */}
        <div className="relative">
          {/* Outer hexagon-like shape */}
          <div className="w-16 h-16 border-2 border-[#18e4a7]/30 rounded-lg 
            animate-[spin_3s_linear_infinite] before:content-[''] before:absolute 
            before:w-full before:h-full before:border-2 before:border-[#18e4a7]/20 
            before:rounded-lg before:rotate-45"/>
          
          {/* Inner rotating segments */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-t-2 border-r-2 border-[#18e4a7] 
              animate-[spin_1s_linear_infinite]"/>
          </div>
        </div>

        {/* Matrix-style loading text */}
        <div className="absolute -bottom-8 flex flex-col items-center">
          <span className="text-xs text-[#18e4a7] tracking-[0.2em] font-bold 
            animate-[pulse_1.5s_ease-in-out_infinite]">
            LOADING..
          </span>
        </div>
      </div>
    </div>
  );
};

// Add the scan animation to your global CSS or Tailwind config
const scanAnimation = `
@keyframes scan {
  0%, 100% { transform: translateY(-50px); opacity: 0; }
  50% { transform: translateY(50px); opacity: 1; }
}
`;

// Inject the animation styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = scanAnimation;
  document.head.appendChild(style);
}

export default LoadingSpinner; 