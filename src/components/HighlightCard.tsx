import React from 'react';

export const HighlightCard: React.FC<{label: string}> = ({label}) => (
  <div
    style={{
      minWidth: 220,
      padding: '28px 22px',
      borderRadius: 24,
      border: '1px solid rgba(255,255,255,0.24)',
      background: 'linear-gradient(160deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04))',
      backdropFilter: 'blur(10px)',
      color: '#fff',
      fontSize: 34,
      textAlign: 'center',
      boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
    }}
  >
    {label}
  </div>
);
