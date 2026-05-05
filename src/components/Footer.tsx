import React from 'react';

export const Footer: React.FC<{text: string}> = ({text}) => (
  <div
    style={{
      position: 'absolute',
      bottom: 20,
      left: 34,
      fontSize: 22,
      color: 'rgba(240,240,248,0.72)',
      letterSpacing: 0.4,
    }}
  >
    {text}
  </div>
);
