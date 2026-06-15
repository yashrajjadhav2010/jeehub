import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const AxiomMascot = ({ size = "md", isThinking = false }: { size?: "sm" | "md" | "lg", isThinking?: boolean }) => {
  const scale = {
    sm: 0.22,
    md: 0.45,
    lg: 1.0
  }[size];

  const dimensions = {
    sm: "w-8 h-8",
    md: "w-20 h-20",
    lg: "w-44 h-44"
  }[size];

  return (
    <motion.div
      animate={{
        y: isThinking ? [0, -10, 0] : [0, -6, 0],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: isThinking ? 1.5 : 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ willChange: 'transform' }}
      className={cn(dimensions, "flex items-center justify-center shrink-0 overflow-visible")}
    >
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
        <svg id="axiom" width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
          <defs>
            <radialGradient id="coreGlow" cx="35%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#FFD166"/>
              <stop offset="40%" stopColor="#FF9933"/>
              <stop offset="100%" stopColor="#E67E22"/>
            </radialGradient>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA"/>
              <stop offset="100%" stopColor="#2563EB"/>
            </linearGradient>
            <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)"/>
            </linearGradient>
            
            <filter id="crispShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feOffset dx="0" dy="3" in="SourceAlpha" result="off"/>
              <feFlood floodColor="#FF9933" floodOpacity="0.25" result="color"/>
              <feComposite in="color" in2="off" operator="in" result="shadow"/>
              <feMerge>
                <feMergeNode in="shadow"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <g>
            <g className="orbits" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="90" cy="90" rx="65" ry="26" stroke="url(#orbitGradient)" strokeWidth="2.5" fill="none" opacity="0.8" vectorEffect="non-scaling-stroke">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="90" cy="90" rx="65" ry="26" stroke="url(#orbitGradient)" strokeWidth="2.5" fill="none" opacity="0.8" transform="rotate(60 90 90)" vectorEffect="non-scaling-stroke">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="90" cy="90" rx="65" ry="26" stroke="url(#orbitGradient)" strokeWidth="2.5" fill="none" opacity="0.8" transform="rotate(120 90 90)" vectorEffect="non-scaling-stroke">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </ellipse>
              <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="25s" repeatCount="indefinite"/>
            </g>
            
            <g filter="url(#crispShadow)">
              <polygon points="90,55 120,72.5 120,107.5 90,125 60,107.5 60,72.5" fill="url(#coreGlow)" stroke="#EA580C" strokeWidth="1" vectorEffect="non-scaling-stroke"/>
            </g>
            
            <g shapeRendering="crispEdges">
              <circle cx="78" cy="82" r="11" stroke="#0F172A" strokeWidth="3" fill="url(#glassGradient)" vectorEffect="non-scaling-stroke"/>
              <circle cx="102" cy="82" r="11" stroke="#0F172A" strokeWidth="3" fill="url(#glassGradient)" vectorEffect="non-scaling-stroke"/>
              <path d="M89 82H91" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
              <ellipse cx="74" cy="78" rx="2.5" ry="3.5" fill="white" opacity="0.95">
                <animate attributeName="opacity" values="0.95;0.5;0.95" dur="3s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="98" cy="78" rx="2.5" ry="3.5" fill="white" opacity="0.95">
                <animate attributeName="opacity" values="0.95;0.5;0.95" dur="3s" repeatCount="indefinite"/>
              </ellipse>
            </g>
            
            <g shapeRendering="geometricPrecision">
              <ellipse cx="78" cy="84" rx="2.5" ry="3.5" fill="#0F172A">
                <animate attributeName="ry" values="3.5;0.5;3.5" dur="4s" repeatCount="indefinite" keyTimes="0;0.05;0.1" begin="0s"/>
              </ellipse>
              <circle cx="79" cy="82.5" r="0.8" fill="white">
                <animate attributeName="opacity" values="1;0;1" dur="4s" repeatCount="indefinite" keyTimes="0;0.05;0.1" begin="0s"/>
              </circle>
              
              <ellipse cx="102" cy="84" rx="2.5" ry="3.5" fill="#0F172A">
                <animate attributeName="ry" values="3.5;0.5;3.5" dur="4s" repeatCount="indefinite" keyTimes="0;0.05;0.1" begin="0.1s"/>
              </ellipse>
              <circle cx="103" cy="82.5" r="0.8" fill="white">
                <animate attributeName="opacity" values="1;0;1" dur="4s" repeatCount="indefinite" keyTimes="0;0.05;0.1" begin="0.1s"/>
              </circle>
            </g>
            
            <g>
              <circle cx="155" cy="90" r="5.5" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" vectorEffect="non-scaling-stroke">
                <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="r" values="5.5;7;5.5" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="57" cy="40" r="5.5" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" vectorEffect="non-scaling-stroke">
                <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="r" values="5.5;7;5.5" dur="2s" repeatCount="indefinite" begin="0.6s"/>
              </circle>
              <circle cx="57" cy="140" r="5.5" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" vectorEffect="non-scaling-stroke">
                <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="r" values="5.5;7;5.5" dur="2s" repeatCount="indefinite" begin="1.2s"/>
              </circle>
            </g>
          </g>
        </svg>
      </div>
    </motion.div>
  );
};
