import {Composition} from 'remotion';
import {MainComposition} from './Composition';
import type {VideoProps} from './types';
import input from '../input.json';

export const Root = () => {
  return (
    <Composition
      id="Video"
      component={MainComposition}
      width={1080}
      height={1920}
      fps={30}
      durationInFrames={900}
      defaultProps={input}
    />
  );
};
