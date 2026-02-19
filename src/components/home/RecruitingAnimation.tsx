import { useEffect, useRef } from "react";

const ANIMATION_STYLES = `
  .recruiting-anim {
    all: initial;
    display: block;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .recruiting-anim .anim-container {
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    position: relative;
  }

  .recruiting-anim svg {
    width: 100%;
    height: 100%;
    display: block;
    max-width: 650px;
    overflow: visible;
  }

  /* Pop-In */
  @keyframes pop-in {
    0% { opacity: 0; transform: scale(0) rotate(-10deg); }
    60% { transform: scale(1.15) rotate(3deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
  }

  /* Icon Bounce */
  @keyframes icon-bounce {
    0% { opacity: 0; transform: scale(0); }
    50% { transform: scale(1.2); }
    70% { transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }

  /* Draw-Line */
  @keyframes draw-stroke {
    0% { stroke-dashoffset: 200; opacity: 0; }
    10% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  /* Badge Pop */
  @keyframes badge-pop {
    0% { opacity: 0; transform: scale(0) rotate(-15deg); }
    60% { transform: scale(1.1) rotate(5deg); }
    80% { transform: scale(0.95) rotate(-2deg); }
    100% { opacity: 1; transform: scale(1) rotate(0); }
  }

  /* Checkmark Draw */
  @keyframes draw-check {
    0% { stroke-dashoffset: 50; opacity: 0; }
    20% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  /* Label Fade */
  @keyframes label-fade {
    0% { opacity: 0; transform: translateY(5px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  /* Glow Pulse */
  @keyframes glow-pulse {
    0%, 100% { filter: drop-shadow(0 0 8px hsl(var(--primary) / 0.4)); }
    50% { filter: drop-shadow(0 0 20px hsl(var(--primary) / 0.7)); }
  }

  .recruiting-anim .step-circle { opacity: 0; }
  .recruiting-anim .step-circle.show {
    animation: pop-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .recruiting-anim .step-icon { opacity: 0; }
  .recruiting-anim .step-icon.show {
    animation: icon-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .recruiting-anim .step-text { opacity: 0; }
  .recruiting-anim .step-text.show {
    animation: label-fade 0.4s ease-out forwards;
  }

  .recruiting-anim .connector {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    opacity: 0;
  }
  .recruiting-anim .connector.draw {
    animation: draw-stroke 0.8s ease-out forwards;
  }

  .recruiting-anim .center-badge { opacity: 0; }
  .recruiting-anim .center-badge.show {
    animation: badge-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .recruiting-anim .checkmark {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    opacity: 0;
  }
  .recruiting-anim .checkmark.draw {
    animation: draw-check 0.5s ease-out forwards;
  }

  .recruiting-anim .active-glow {
    animation: glow-pulse 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    .recruiting-anim .anim-container {
      min-height: 420px;
    }
  }
`;

const RecruitingCycleAnimation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const getEl = (id: string) => wrapper.querySelector(`#${id}`);

    const allIds = [
      "step1-circle", "step1-icon", "step1-text",
      "step2-circle", "step2-icon", "step2-text",
      "step3-circle", "step3-icon", "step3-text",
      "step4-circle", "step4-icon", "step4-text",
      "connector-1", "connector-2", "connector-3", "connector-4",
      "center-badge", "final-checkmark"
    ];

    const resetAnimation = () => {
      allIds.forEach(id => {
        getEl(id)?.classList.remove("show", "draw", "active-glow");
      });
    };

    const runAnimation = () => {
      const timeline = [
        // Step 1
        { time: 200, action: () => getEl("step1-circle")?.classList.add("show") },
        { time: 400, action: () => getEl("step1-icon")?.classList.add("show") },
        { time: 550, action: () => getEl("step1-text")?.classList.add("show") },

        // Connector 1
        { time: 850, action: () => getEl("connector-1")?.classList.add("draw") },

        // Step 2
        { time: 1300, action: () => getEl("step2-circle")?.classList.add("show") },
        { time: 1500, action: () => getEl("step2-icon")?.classList.add("show") },
        { time: 1650, action: () => getEl("step2-text")?.classList.add("show") },

        // Connector 2
        { time: 1950, action: () => getEl("connector-2")?.classList.add("draw") },

        // Step 3
        { time: 2400, action: () => getEl("step3-circle")?.classList.add("show") },
        { time: 2600, action: () => getEl("step3-icon")?.classList.add("show") },
        { time: 2750, action: () => getEl("step3-text")?.classList.add("show") },

        // Connector 3
        { time: 3050, action: () => getEl("connector-3")?.classList.add("draw") },

        // Step 4
        { time: 3500, action: () => getEl("step4-circle")?.classList.add("show") },
        { time: 3700, action: () => getEl("step4-icon")?.classList.add("show") },
        { time: 3850, action: () => getEl("step4-text")?.classList.add("show") },

        // Connector 4 (loop back)
        { time: 4150, action: () => getEl("connector-4")?.classList.add("draw") },

        // Center Badge
        { time: 4600, action: () => getEl("center-badge")?.classList.add("show") },
        { time: 5000, action: () => getEl("final-checkmark")?.classList.add("draw") },
        { time: 5400, action: () => getEl("center-badge")?.classList.add("active-glow") },
      ];

      timeline.forEach(({ time, action }) => setTimeout(action, time));
    };

    runAnimation();

    const interval = setInterval(() => {
      resetAnimation();
      setTimeout(runAnimation, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Fixed positions for clean layout
  const cx = 300; // center X
  const cy = 280; // center Y
  const r = 130;  // radius of the main circle
  const stepR = 36; // radius of step circles

  // Calculate angle offset where step circles intersect the main circle
  const angleOffset = Math.asin(stepR / r) * (180 / Math.PI); // ~16 degrees

  // Helper to get point on circle
  const getPoint = (angleDeg: number) => ({
    x: cx + r * Math.cos(angleDeg * Math.PI / 180),
    y: cy + r * Math.sin(angleDeg * Math.PI / 180)
  });

  // Arc paths between steps
  const getArcPath = (fromAngle: number, toAngle: number) => {
    const start = getPoint(fromAngle + angleOffset);
    const end = getPoint(toAngle - angleOffset);
    return `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`;
  };

  // Step positions (on the circle)
  const steps = [
    { id: 1, x: cx, y: cy - r, labelX: cx, labelY: cy - r - 55, icon: "send", label: "Anfrage stellen" },
    { id: 2, x: cx + r, y: cy, labelX: cx + r + 70, labelY: cy, icon: "profiles", label: "Profile aussuchen" },
    { id: 3, x: cx, y: cy + r, labelX: cx, labelY: cy + r + 70, icon: "chat", label: "Bewerbungsgespräch" },
    { id: 4, x: cx - r, y: cy, labelX: cx - r - 70, labelY: cy, icon: "check", label: "Einstellen" },
  ];

  return (
    <div ref={wrapperRef} className="recruiting-anim">
      <style>{ANIMATION_STYLES}</style>
      <div className="anim-container">
        <svg viewBox="0 0 600 560" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="3" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.15" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background dashed circle */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="2"
            strokeDasharray="8 4"
            opacity="0.4"
          />

          {/* Connectors (arc paths along the circle) */}
          {/* Arc from Step 1 (top) to Step 2 (right) */}
          <path
            id="connector-1"
            className="connector"
            d={getArcPath(-90, 0)}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Arc from Step 2 (right) to Step 3 (bottom) */}
          <path
            id="connector-2"
            className="connector"
            d={getArcPath(0, 90)}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Arc from Step 3 (bottom) to Step 4 (left) */}
          <path
            id="connector-3"
            className="connector"
            d={getArcPath(90, 180)}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Arc from Step 4 (left) to Step 1 (top) */}
          <path
            id="connector-4"
            className="connector"
            d={getArcPath(180, 270)}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Step 1 - Top */}
          <g>
            <circle
              id="step1-circle"
              className="step-circle"
              cx={steps[0].x}
              cy={steps[0].y}
              r="36"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              filter="url(#shadow)"
            />
            <g id="step1-icon" className="step-icon">
              {/* Paper plane / Send icon */}
              <path
                d={`M ${steps[0].x - 12} ${steps[0].y + 2} L ${steps[0].x + 12} ${steps[0].y - 8} L ${steps[0].x + 4} ${steps[0].y + 10} L ${steps[0].x} ${steps[0].y + 2} Z`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={`M ${steps[0].x} ${steps[0].y + 2} L ${steps[0].x + 12} ${steps[0].y - 8}`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </g>
            <g id="step1-text" className="step-text">
              <text x={steps[0].labelX} y={steps[0].labelY - 12} textAnchor="middle" fontSize="12" fontWeight="700" fill="hsl(var(--primary))">01</text>
              <text x={steps[0].labelX} y={steps[0].labelY + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill="hsl(var(--foreground))">{steps[0].label}</text>
            </g>
          </g>

          {/* Step 2 - Right */}
          <g>
            <circle
              id="step2-circle"
              className="step-circle"
              cx={steps[1].x}
              cy={steps[1].y}
              r="36"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              filter="url(#shadow)"
            />
            <g id="step2-icon" className="step-icon">
              <circle cx={steps[1].x - 8} cy={steps[1].y - 6} r="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
              <circle cx={steps[1].x + 8} cy={steps[1].y - 6} r="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
              <path d={`M ${steps[1].x - 14} ${steps[1].y + 10} Q ${steps[1].x - 8} ${steps[1].y + 2} ${steps[1].x - 2} ${steps[1].y + 10}`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
              <path d={`M ${steps[1].x + 2} ${steps[1].y + 10} Q ${steps[1].x + 8} ${steps[1].y + 2} ${steps[1].x + 14} ${steps[1].y + 10}`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            </g>
            <g id="step2-text" className="step-text">
              <text x={steps[1].x + 50} y={steps[1].y - 8} textAnchor="start" fontSize="12" fontWeight="700" fill="hsl(var(--primary))">02</text>
              <text x={steps[1].x + 50} y={steps[1].y + 10} textAnchor="start" fontSize="14" fontWeight="600" fill="hsl(var(--foreground))">{steps[1].label}</text>
            </g>
          </g>

          {/* Step 3 - Bottom */}
          <g>
            <circle
              id="step3-circle"
              className="step-circle"
              cx={steps[2].x}
              cy={steps[2].y}
              r="36"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              filter="url(#shadow)"
            />
            <g id="step3-icon" className="step-icon">
              <rect x={steps[2].x - 12} y={steps[2].y - 10} width="24" height="16" rx="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
              <circle cx={steps[2].x - 4} cy={steps[2].y - 2} r="2" fill="hsl(var(--primary))" />
              <circle cx={steps[2].x + 4} cy={steps[2].y - 2} r="2" fill="hsl(var(--primary))" />
              <path d={`M ${steps[2].x - 6} ${steps[2].y + 8} L ${steps[2].x} ${steps[2].y + 12} L ${steps[2].x + 6} ${steps[2].y + 8}`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g id="step3-text" className="step-text">
              <text x={steps[2].labelX} y={steps[2].labelY - 5} textAnchor="middle" fontSize="12" fontWeight="700" fill="hsl(var(--primary))">03</text>
              <text x={steps[2].labelX} y={steps[2].labelY + 13} textAnchor="middle" fontSize="14" fontWeight="600" fill="hsl(var(--foreground))">{steps[2].label}</text>
            </g>
          </g>

          {/* Step 4 - Left */}
          <g>
            <circle
              id="step4-circle"
              className="step-circle"
              cx={steps[3].x}
              cy={steps[3].y}
              r="36"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              filter="url(#shadow)"
            />
            <g id="step4-icon" className="step-icon">
              <circle cx={steps[3].x} cy={steps[3].y} r="12" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
              <path
                d={`M ${steps[3].x - 6} ${steps[3].y} L ${steps[3].x - 2} ${steps[3].y + 4} L ${steps[3].x + 7} ${steps[3].y - 5}`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="step4-text" className="step-text">
              <text x={steps[3].x - 50} y={steps[3].y - 8} textAnchor="end" fontSize="12" fontWeight="700" fill="hsl(var(--primary))">04</text>
              <text x={steps[3].x - 50} y={steps[3].y + 10} textAnchor="end" fontSize="14" fontWeight="600" fill="hsl(var(--foreground))">{steps[3].label}</text>
            </g>
          </g>

          {/* Center Badge */}
          <g id="center-badge" className="center-badge">
            <circle cx={cx} cy={cy} r="54" fill="hsl(var(--primary) / 0.1)" />
            <circle cx={cx} cy={cy} r="46" fill="url(#primaryGradient)" filter="url(#shadow)" />
            <circle cx={cx} cy={cy} r="38" fill="hsl(var(--card))" />
            <text x={cx} y={cy - 4} textAnchor="middle" fontSize="24" fontWeight="800" fill="hsl(var(--primary))">1-2</text>
            <text x={cx} y={cy + 14} textAnchor="middle" fontSize="11" fontWeight="600" fill="hsl(var(--muted-foreground))">Wochen</text>
            <path
              id="final-checkmark"
              className="checkmark"
              d={`M ${cx - 10} ${cy + 30} L ${cx - 3} ${cy + 37} L ${cx + 10} ${cy + 24}`}
              fill="none"
              stroke="#10B981"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default RecruitingCycleAnimation;
