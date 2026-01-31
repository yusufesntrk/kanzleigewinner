const RecruitingAnimation = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto h-80 md:h-96">
      {/* CSS Animations */}
      <style>{`
        @keyframes profile-pop {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes slide-in-right {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes check-draw {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.4); }
          50% { box-shadow: 0 0 0 15px hsl(var(--primary) / 0); }
        }

        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes connection-draw {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes badge-bounce {
          0% { transform: scale(0); }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        .profile-card {
          animation: profile-pop 0.5s ease-out forwards, float-up 3s ease-in-out infinite;
        }

        .profile-1 { animation-delay: 0s, 0.5s; }
        .profile-2 { animation-delay: 0.2s, 0.7s; }
        .profile-3 { animation-delay: 0.4s, 0.9s; }

        .request-arrow {
          animation: slide-in-right 0.6s ease-out 1s forwards;
          opacity: 0;
        }

        .check-circle {
          animation: badge-bounce 0.5s ease-out 2s forwards;
          transform: scale(0);
        }

        .check-mark {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: check-draw 0.4s ease-out 2.3s forwards;
        }

        .connection-line {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: connection-draw 0.8s ease-out 0.8s forwards;
        }

        .glow-ring {
          animation: pulse-glow 2s ease-in-out infinite;
          animation-delay: 2.5s;
        }
      `}</style>

      {/* SVG Animation Container */}
      <svg viewBox="0 0 400 300" className="w-full h-full">
        {/* Background Grid Pattern */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3"/>
          </pattern>

          {/* Gradient for profiles */}
          <linearGradient id="profileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--card))"/>
            <stop offset="100%" stopColor="hsl(var(--muted))"/>
          </linearGradient>

          {/* Primary color gradient */}
          <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))"/>
            <stop offset="100%" stopColor="hsl(var(--accent))"/>
          </linearGradient>
        </defs>

        <rect width="400" height="300" fill="url(#grid)"/>

        {/* Profile Cards - Left Side */}
        <g className="profile-card profile-1">
          <rect x="30" y="60" width="80" height="100" rx="12" fill="url(#profileGrad)" stroke="hsl(var(--border))" strokeWidth="2"/>
          <circle cx="70" cy="95" r="20" fill="hsl(var(--primary) / 0.2)"/>
          <circle cx="70" cy="95" r="15" fill="hsl(var(--primary) / 0.3)"/>
          <rect x="45" y="125" width="50" height="6" rx="3" fill="hsl(var(--muted-foreground) / 0.3)"/>
          <rect x="50" y="137" width="40" height="4" rx="2" fill="hsl(var(--muted-foreground) / 0.2)"/>
          {/* Status indicator */}
          <circle cx="100" cy="70" r="8" fill="hsl(var(--success))"/>
        </g>

        <g className="profile-card profile-2">
          <rect x="40" y="130" width="80" height="100" rx="12" fill="url(#profileGrad)" stroke="hsl(var(--border))" strokeWidth="2"/>
          <circle cx="80" cy="165" r="20" fill="hsl(var(--accent) / 0.2)"/>
          <circle cx="80" cy="165" r="15" fill="hsl(var(--accent) / 0.3)"/>
          <rect x="55" y="195" width="50" height="6" rx="3" fill="hsl(var(--muted-foreground) / 0.3)"/>
          <rect x="60" y="207" width="40" height="4" rx="2" fill="hsl(var(--muted-foreground) / 0.2)"/>
          <circle cx="110" cy="140" r="8" fill="hsl(var(--success))"/>
        </g>

        <g className="profile-card profile-3">
          <rect x="20" y="40" width="70" height="90" rx="10" fill="url(#profileGrad)" stroke="hsl(var(--border))" strokeWidth="2" transform="translate(100, 80) scale(0.8)"/>
          <circle cx="115" cy="115" r="16" fill="hsl(var(--primary) / 0.15)"/>
          <circle cx="115" cy="115" r="12" fill="hsl(var(--primary) / 0.25)"/>
          <rect x="98" y="138" width="35" height="5" rx="2.5" fill="hsl(var(--muted-foreground) / 0.3)"/>
          <circle cx="145" cy="95" r="6" fill="hsl(var(--success))"/>
        </g>

        {/* Connection Lines */}
        <path
          className="connection-line"
          d="M 130 120 Q 180 100 230 130"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className="connection-line"
          d="M 120 180 Q 180 160 230 150"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ animationDelay: '1s' }}
        />

        {/* Request Arrow / Kanzlei Side */}
        <g className="request-arrow">
          {/* Kanzlei Building Icon */}
          <rect x="250" y="100" width="100" height="80" rx="10" fill="url(#profileGrad)" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <rect x="270" y="120" width="20" height="25" rx="3" fill="hsl(var(--primary) / 0.2)"/>
          <rect x="310" y="120" width="20" height="25" rx="3" fill="hsl(var(--primary) / 0.2)"/>
          <rect x="285" y="150" width="30" height="30" rx="3" fill="hsl(var(--primary) / 0.3)"/>

          {/* "KANZLEI" Text */}
          <text x="300" y="195" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontWeight="600">IHRE KANZLEI</text>
        </g>

        {/* Success Badge */}
        <g className="check-circle glow-ring" style={{ transformOrigin: '300px 70px' }}>
          <circle cx="300" cy="70" r="25" fill="url(#primaryGrad)"/>
          <path
            className="check-mark"
            d="M 288 70 L 296 78 L 312 62"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* "1 WOCHE" Badge */}
        <g className="check-circle" style={{ transformOrigin: '300px 240px', animationDelay: '2.5s' }}>
          <rect x="255" y="225" width="90" height="30" rx="15" fill="url(#primaryGrad)"/>
          <text x="300" y="245" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">1 WOCHE</text>
        </g>

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            cx={50 + i * 70}
            cy={30 + (i % 3) * 100}
            r={3 + (i % 2) * 2}
            fill="hsl(var(--primary) / 0.3)"
            className="profile-card"
            style={{ animationDelay: `${i * 0.3}s, ${i * 0.2}s` }}
          />
        ))}
      </svg>

      {/* Labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs md:text-sm text-muted-foreground">
        <span className="bg-card/80 backdrop-blur-sm px-2 py-1 rounded">Profile bereit</span>
        <span className="bg-card/80 backdrop-blur-sm px-2 py-1 rounded">Sofort verfügbar</span>
      </div>
    </div>
  );
};

export default RecruitingAnimation;
