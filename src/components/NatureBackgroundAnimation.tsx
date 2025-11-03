export default function NatureBackgroundAnimation() {
  return (
    <>
      <style>{`
        @keyframes sway-left {
          0%, 100% { transform: translateX(0) scaleX(1); }
          50% { transform: translateX(-2px) scaleX(0.98); }
        }
        
        @keyframes sway-right {
          0%, 100% { transform: translateX(0) scaleX(1); }
          50% { transform: translateX(2px) scaleX(1.02); }
        }
        
        @keyframes float-slow {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.12; }
        }
        
        @keyframes float-slower {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.10; }
        }
        
        .nature-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        
        .tree-container {
          position: absolute;
          opacity: 0.08;
        }
        
        .tree-left {
          animation: sway-left 8s ease-in-out infinite, float-slow 6s ease-in-out infinite;
        }
        
        .tree-center {
          animation: float-slower 7s ease-in-out infinite;
        }
        
        .tree-right {
          animation: sway-right 9s ease-in-out infinite, float-slow 5s ease-in-out infinite;
        }
      `}</style>
      
      <div className="nature-bg">
        {/* Left mountain range */}
        <div className="tree-container tree-left" style={{ left: '-10%', top: '5%', width: '280px', height: '300px' }}>
          <svg viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
            <path d="M0 100 L30 50 L60 80 L90 30 L130 70 L160 40 L200 85 L200 150 L0 150" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Center-left mountain range */}
        <div className="tree-container tree-center" style={{ left: '5%', top: '25%', width: '260px', height: '280px' }}>
          <svg viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
            <path d="M0 110 L25 65 L50 95 L75 45 L110 80 L145 50 L175 90 L200 70 L200 150 L0 150" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Center mountain range */}
        <div className="tree-container tree-right" style={{ left: '40%', top: '10%', width: '300px', height: '320px' }}>
          <svg viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
            <path d="M0 95 L35 40 L70 75 L100 35 L135 65 L165 45 L200 80 L200 150 L0 150" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Right-center mountain range */}
        <div className="tree-container tree-left" style={{ right: '8%', top: '15%', width: '270px', height: '290px' }}>
          <svg viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
            <path d="M0 105 L32 55 L65 90 L95 50 L128 75 L155 45 L200 85 L200 150 L0 150" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Far right mountain range */}
        <div className="tree-container tree-center" style={{ right: '-5%', top: '20%', width: '290px', height: '310px' }}>
          <svg viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
            <path d="M0 100 L40 50 L75 85 L110 40 L145 70 L175 48 L200 88 L200 150 L0 150" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Lower left mountain range */}
        <div className="tree-container tree-right" style={{ left: '2%', bottom: '-5%', width: '250px', height: '270px' }}>
          <svg viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
            <path d="M0 115 L28 70 L55 100 L85 60 L120 85 L155 55 L200 95 L200 150 L0 150" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Lower right mountain range */}
        <div className="tree-container tree-left" style={{ right: '2%', bottom: '-3%', width: '280px', height: '300px' }}>
          <svg viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-gray-900">
            <path d="M0 105 L35 52 L70 88 L105 42 L140 75 L170 50 L200 82 L200 150 L0 150" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </>
  );
}
