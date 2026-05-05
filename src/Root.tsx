import {Composition} from 'remotion';
import {Main} from './Main';

export const Root: React.FC = () => {
  return (
    <Composition
      id="Video"
      component={Main}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
