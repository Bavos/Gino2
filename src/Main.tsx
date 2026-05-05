import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import data from '../input.json';

const colors = {
  deepGreen: '#073D34',
  darkGreen: '#052B25',
  gold: '#D8B56D',
  cream: '#F5EFE3',
  ivory: '#FFF8EC',
  textDark: '#123C35',
};

const fonts = {
  title: 'Georgia, Times New Roman, serif',
  body: 'Arial, Helvetica, sans-serif',
};

export const Main: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneDuration = Math.floor(900 / data.scenes.length);
  const sceneIndex = Math.floor(frame / sceneDuration);
  const scene = data.scenes[sceneIndex];

  const localFrame = frame % sceneDuration;

  const opacity = interpolate(localFrame, [0, 20, 130, 150], [0, 1, 1, 0]);

  const scale = interpolate(frame, [0, 900], [1, 1.03]);

  if (!scene) return null;

  const isLastScene = sceneIndex === data.scenes.length - 1;

  return (
    <AbsoluteFill
      style={{
        background: colors.cream,
        fontFamily: fonts.body,
      }}
    >
      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg, ${colors.deepGreen}, ${colors.darkGreen})`,
          transform: `scale(${scale})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 60,
          right: 60,
          top: 250,
          bottom: 220,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity,
        }}
      >
        <div
          style={{
            width: '100%',
            background: 'rgba(255, 248, 236, 0.92)',
            border: `2px solid ${colors.gold}`,
            borderRadius: 40,
            padding: '60px 50px',
            boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
            textAlign: isLastScene ? 'center' : 'left',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: fonts.title,
              fontSize: isLastScene ? 60 : 80,
              color: colors.textDark,
              lineHeight: 1.1,
            }}
          >
            {scene.title}
          </h1>

          {scene.subtitle && (
            <div
              style={{
                marginTop: 20,
                fontSize: 30,
                color: colors.gold,
                fontWeight: 700,
              }}
            >
              {scene.subtitle}
            </div>
          )}

          <p
            style={{
              marginTop: 30,
              fontSize: isLastScene ? 28 : 36,
              lineHeight: 1.4,
              color: colors.textDark,
              whiteSpace: 'pre-line',
            }}
          >
            {scene.text}
          </p>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: 40,
          right: 40,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.7)',
          fontSize: 18,
        }}
      >
        Itaipava / Petrópolis - RJ
      </div>
    </AbsoluteFill>
  );
};
