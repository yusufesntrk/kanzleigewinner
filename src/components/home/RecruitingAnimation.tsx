import { useEffect, useState } from "react";

const steps = [
  { id: 1, label: "Anfrage stellen", icon: "send" },
  { id: 2, label: "Profile aussuchen", icon: "profiles" },
  { id: 3, label: "Bewerbungsgespräch", icon: "interview" },
  { id: 4, label: "Einstellen", icon: "hire" },
];

const RecruitingCycleAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto py-16">
      <style>{`
        @keyframes cycle-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }

        @keyframes dash-rotate {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -31.4; }
        }

        @keyframes icon-pop {
          0% { transform: scale(0.8); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        @keyframes check-appear {
          0% { transform: scale(0) rotate(-45deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes arrow-flow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }

        .step-active {
          animation: cycle-pulse 1s ease-in-out infinite;
        }

        .icon-active {
          animation: icon-pop 0.4s ease-out;
        }

        .check-active {
          animation: check-appear 0.3s ease-out forwards;
        }

        .arrow-animated {
          stroke-dasharray: 10 10;
          animation: arrow-flow 1s linear infinite;
        }
      `}</style>

      {/* Center Badge - 1-2 Wochen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
          <div className="text-center text-white">
            <div className="text-2xl font-bold">1-2</div>
            <div className="text-xs font-medium opacity-90">Wochen</div>
          </div>
        </div>
      </div>

      {/* Circular Layout */}
      <svg viewBox="0 0 400 400" className="w-full h-auto">
        {/* Background Circle */}
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          strokeDasharray="10 5"
        />

        {/* Animated Progress Circle */}
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${(activeStep + 1) * 235.6 / 4} 942.5`}
          transform="rotate(-90 200 200)"
          style={{ transition: 'stroke-dasharray 0.5s ease-out' }}
        />

        {/* Step Nodes */}
        {steps.map((step, index) => {
          const angle = (index * 90 - 90) * (Math.PI / 180);
          const x = 200 + 150 * Math.cos(angle);
          const y = 200 + 150 * Math.sin(angle);
          const isActive = activeStep === index;
          const isPast = activeStep > index || (activeStep === 0 && index === 3);

          return (
            <g key={step.id}>
              {/* Connection Arrow */}
              {index < 3 && (
                <path
                  d={`M ${x + 35 * Math.cos(angle + Math.PI/2)} ${y + 35 * Math.sin(angle + Math.PI/2)}
                      Q ${200 + 110 * Math.cos(angle + Math.PI/4)} ${200 + 110 * Math.sin(angle + Math.PI/4)}
                      ${200 + 150 * Math.cos(((index + 1) * 90 - 90) * Math.PI / 180) - 35 * Math.cos(((index + 1) * 90 - 90) * Math.PI / 180 - Math.PI/2)}
                      ${200 + 150 * Math.sin(((index + 1) * 90 - 90) * Math.PI / 180) - 35 * Math.sin(((index + 1) * 90 - 90) * Math.PI / 180 - Math.PI/2)}`}
                  fill="none"
                  stroke={isPast || isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                  strokeWidth="2"
                  className={isActive ? "arrow-animated" : ""}
                  opacity={0.5}
                />
              )}

              {/* Node Circle */}
              <circle
                cx={x}
                cy={y}
                r="35"
                fill={isActive ? "hsl(var(--primary))" : isPast ? "hsl(var(--primary) / 0.2)" : "hsl(var(--card))"}
                stroke={isActive || isPast ? "hsl(var(--primary))" : "hsl(var(--border))"}
                strokeWidth="3"
                className={isActive ? "step-active" : ""}
                style={{ transition: 'all 0.3s ease-out' }}
              />

              {/* Icon */}
              <g className={isActive ? "icon-active" : ""}>
                {step.icon === "send" && (
                  <path
                    d={`M ${x - 10} ${y + 5} L ${x + 10} ${y - 5} L ${x + 10} ${y + 12} L ${x - 10} ${y + 5} M ${x + 10} ${y - 5} L ${x - 5} ${y - 5}`}
                    fill="none"
                    stroke={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                {step.icon === "profiles" && (
                  <>
                    <circle cx={x - 8} cy={y - 5} r="6" fill="none" stroke={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} strokeWidth="2" />
                    <circle cx={x + 8} cy={y - 5} r="6" fill="none" stroke={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} strokeWidth="2" />
                    <path d={`M ${x - 14} ${y + 10} Q ${x - 8} ${y + 3} ${x - 2} ${y + 10}`} fill="none" stroke={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} strokeWidth="2" />
                    <path d={`M ${x + 2} ${y + 10} Q ${x + 8} ${y + 3} ${x + 14} ${y + 10}`} fill="none" stroke={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} strokeWidth="2" />
                  </>
                )}
                {step.icon === "interview" && (
                  <>
                    <rect x={x - 12} y={y - 10} width="24" height="16" rx="3" fill="none" stroke={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} strokeWidth="2" />
                    <circle cx={x - 4} cy={y - 2} r="2" fill={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} />
                    <circle cx={x + 4} cy={y - 2} r="2" fill={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} />
                    <path d={`M ${x - 6} ${y + 8} L ${x} ${y + 12} L ${x + 6} ${y + 8}`} fill="none" stroke={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
                {step.icon === "hire" && (
                  <path
                    d={`M ${x - 8} ${y} L ${x - 2} ${y + 6} L ${x + 10} ${y - 6}`}
                    fill="none"
                    stroke={isActive ? "white" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isPast && !isActive ? "check-active" : ""}
                  />
                )}
              </g>

              {/* Label */}
              <text
                x={x}
                y={y + (index === 0 ? -55 : index === 2 ? 60 : 0)}
                dx={index === 1 ? 55 : index === 3 ? -55 : 0}
                textAnchor="middle"
                fill={isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                fontSize="13"
                fontWeight={isActive ? "600" : "500"}
                style={{ transition: 'all 0.3s ease-out' }}
              >
                {step.label}
              </text>

              {/* Step Number */}
              <text
                x={x}
                y={y + (index === 0 ? -70 : index === 2 ? 75 : 0)}
                dx={index === 1 ? 55 : index === 3 ? -55 : 0}
                textAnchor="middle"
                fill={isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.5)"}
                fontSize="10"
                fontWeight="600"
              >
                0{step.id}
              </text>
            </g>
          );
        })}

        {/* Return Arrow (Step 4 to Step 1) */}
        <path
          d="M 165 55 Q 100 100 55 165"
          fill="none"
          stroke={activeStep === 3 ? "hsl(var(--primary))" : "hsl(var(--border))"}
          strokeWidth="2"
          strokeDasharray="5 5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default RecruitingCycleAnimation;
