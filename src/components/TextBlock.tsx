import React from 'react';

export const TextBlock: React.FC<{title: string; subtitle?: string; text: string}> = ({title, subtitle, text}) => {
  return (
    <div style={{textAlign: 'center', maxWidth: 900, color: 'white'}}>
      <h1 style={{fontSize: 106, margin: 0, lineHeight: 1.03, letterSpacing: 0.8, textShadow: '0 0 30px rgba(212,167,82,0.35)'}}>{title}</h1>
      {subtitle ? <h2 style={{fontSize: 52, marginTop: 26, marginBottom: 0, fontWeight: 500, color: '#f0d9a4'}}>{subtitle}</h2> : null}
      <p style={{fontSize: 38, marginTop: 34, lineHeight: 1.35, color: 'rgba(245,247,255,0.95)'}}>{text}</p>
    </div>
  );
};
