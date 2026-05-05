import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import data from '../input.json';

const colors = {
  deepGreen: '#073D34',
  darkGreen: '#052B25',
  gold: '#D8B56D',
  cream: '#F5EFE3',
  ivory: '#FFF8EC',
  textDark: '#123C35',
  muted: '#6F6A5F',
};

const fonts = {
  title: 'Georgia, Times New Roman, serif',
  body: 'Arial, Helvetica, sans-serif',
};

type Scene = {
  title: string;
  highlight?: string;
  subtitle?: string;
  text: string;
};

export const Main: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneDuration = 150;
  const sceneIndex = Math.floor(frame / sceneDuration);
  const scene = data.scenes[sceneIndex] as Scene | undefined;

  const localFrame = frame % sceneDuration;

  const opacity = interpolate(localFrame, [0, 22, 125, 150], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(localFrame, [0, 28], [36, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(frame, [0, 900], [1, 1.035], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  if (!scene) return null;

  return (
    <AbsoluteFill
      style={{
        background: colors.cream,
        fontFamily: fonts.body,
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg, ${colors.deepGreen} 0%, ${colors.darkGreen} 46%, #0B4A3F 100%)`,
          transform: `scale(${scale})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 75% 20%, rgba(216,181,109,0.22), transparent 34%), radial-gradient(circle at 12% 78%, rgba(255,248,236,0.12), transparent 38%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 86,
          left: 72,
          right: 72,
          height: 2,
          background: colors.gold,
          opacity: 0.9,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 52,
          left: 72,
          color: colors.gold,
          fontSize: 28,
          letterSpacing: 5,
          fontWeight: 700,
        }}
      >
        ITAIPAVA / PETRÓPOLIS - RJ
      </div>

      <div
        style={{
          position: 'absolute',
          left: 64,
          right: 64,
          top: 280,
          bottom: 250,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <div
          style={{
            width: '100%',
            background: 'rgba(255, 248, 236, 0.92)',
            border: `2px solid rgba(216,181,109,0.7)`,
            borderRadius: 42,
            padding: '70px 54px',
            boxShadow: '0 35px 90px rgba(0,0,0,0.35)',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: fonts.title,
              fontSize: 82,
              lineHeight: 1.05,
              fontWeight: 700,
              color: colors.textDark,
              textAlign: 'left',
            }}
          >
            {scene.title}
            {scene.highlight ? (
              <>
                <br />
                <span style={{color: colors.gold}}>{scene.highlight}</span>
              </>
            ) : null}
          </h1>

          {scene.subtitle ? (
            <div
              style={{
                marginTop: 28,
                fontSize: 34,
                color: colors.gold,
                fontWeight: 700,
                lineHeight: 1.25,
              }}
            >
              {scene.subtitle}
            </div>
          ) : null}

          <div
            style={{
              width: 120,
              height: 3,
              background: colors.gold,
              marginTop: 38,
              marginBottom: 38,
            }}
          />

          <p
            style={{
              margin: 0,
              fontSize: 38,
              lineHeight: 1.35,
              color: colors.textDark,
              fontWeight: 400,
            }}
          >
            {scene.text}
          </p>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 64,
          right: 64,
          bottom: 92,
          background: colors.deepGreen,
          borderRadius: 32,
          padding: '34px 42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 20px 55px rgba(0,0,0,0.3)',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: fonts.title,
              color: colors.ivory,
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            Interlocução Clínica
          </div>
          <div
            style={{
              color: colors.gold,
              fontSize: 22,
              marginTop: 6,
              letterSpacing: 1,
            }}
          >
            Núcleo de Discussão Seleta
          </div>
        </div>

        <div
          style={{
            color: colors.ivory,
            fontSize: 22,
            textAlign: 'right',
            opacity: 0.86,
          }}
        >
          Psicologia e Psiquiatria
          <br />
          Itaipava / Petrópolis
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: 42,
          right: 42,
          color: 'rgba(255, 248, 236, 0.65)',
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        Conteúdo institucional | Informações sujeitas à confirmação no contato
      </div>
    </AbsoluteFill>
  );
};
