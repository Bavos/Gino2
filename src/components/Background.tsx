import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const palette = ['#081326', '#1b1030', '#3c1028', '#08080d'];

export const Background: React.FC<{sceneIndex: number}> = ({sceneIndex}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const drift = interpolate(frame, [0, durationInFrames], [0, 360]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${50 + Math.sin((frame + sceneIndex * 20) / 40) * 10}% ${35 + Math.cos(frame / 55) * 8}%, #2e4370 0%, ${palette[sceneIndex % palette.length]} 45%, #030305 100%)`,
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(130deg, rgba(255,215,140,0.16), rgba(255,255,255,0) 30%, rgba(130,40,80,0.18) 70%, rgba(0,0,0,0.6))',
          mixBlendMode: 'screen',
        }}
      />
      {Array.from({length: 28}).map((_, i) => {
        const size = 2 + (i % 5);
        const x = ((i * 179) % 100) + Math.sin((frame + i * 10) / 80) * 2;
        const y = ((i * 37 + drift) % 100);
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              borderRadius: '999px',
              background: i % 2 === 0 ? 'rgba(255,221,157,0.55)' : 'rgba(176,202,255,0.45)',
              boxShadow: '0 0 16px rgba(255,221,157,0.55)',
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
