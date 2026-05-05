import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame} from 'remotion';
import {Background} from './components/Background';
import {Footer} from './components/Footer';
import {HighlightCard} from './components/HighlightCard';
import {TextBlock} from './components/TextBlock';
import type {VideoProps} from './types';

const sceneDurations = [120, 120, 150, 150, 150, 120, 90];

const getScene = (frame: number) => {
  let acc = 0;
  for (let i = 0; i < sceneDurations.length; i++) {
    const next = acc + sceneDurations[i];
    if (frame < next) return {index: i, localFrame: frame - acc, duration: sceneDurations[i]};
    acc = next;
  }
  return {index: sceneDurations.length - 1, localFrame: 0, duration: sceneDurations.at(-1) ?? 90};
};

export const MainComposition: React.FC<VideoProps> = (props) => {
  const frame = useCurrentFrame();
  const {index, localFrame, duration} = getScene(frame);
  const scene = props.scenes[index];
  const entrance = spring({frame: localFrame, fps: 30, config: {damping: 18, mass: 0.8}});
  const exit = interpolate(localFrame, [duration - 22, duration], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.quad)});
  const opacity = entrance * exit;
  const scale = interpolate(entrance, [0, 1], [1.08, 1]);

  return (
    <AbsoluteFill style={{fontFamily: 'Inter, SF Pro Display, Arial, sans-serif'}}>
      <Background sceneIndex={index} />
      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', transform: `scale(${scale})`, opacity}}>
        {index === 2 ? (
          <div style={{textAlign: 'center', color: 'white'}}>
            <h1 style={{fontSize: 88, margin: 0, textShadow: '0 0 28px rgba(255,202,122,0.35)'}}>{scene.title}</h1>
            <div style={{fontSize: 240, fontWeight: 800, lineHeight: 1, color: '#f8d889', textShadow: '0 0 45px rgba(245,183,77,0.5)'}}>03</div>
            <p style={{fontSize: 40}}>{scene.text}</p>
          </div>
        ) : index === 3 ? (
          <div style={{textAlign: 'center'}}>
            <TextBlock title={scene.title} text={scene.text} />
            <div style={{display: 'flex', gap: 20, marginTop: 42, justifyContent: 'center'}}>
              <HighlightCard label="Escuta" />
              <HighlightCard label="Intercâmbio" />
              <HighlightCard label="Síntese" />
            </div>
          </div>
        ) : index === 5 ? (
          <div style={{textAlign: 'center'}}>
            <TextBlock title={scene.title} text={scene.text} />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 34, marginTop: 50}}>
              {[0, 1, 2].map((c) => (
                <div key={c} style={{width: 44 + c * 8, height: 44 + c * 8, borderRadius: '50%', background: 'rgba(255,221,157,0.85)', boxShadow: '0 0 40px rgba(255,221,157,0.75)'}} />
              ))}
            </div>
          </div>
        ) : (
          <TextBlock title={scene.title} subtitle={scene.subtitle} text={scene.text} />
        )}
      </AbsoluteFill>
      <Footer text={props.footer} />
    </AbsoluteFill>
  );
};
