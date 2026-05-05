export type SceneContent = {
  title: string;
  subtitle?: string;
  text: string;
};

export type VideoProps = {
  title: string;
  subtitle: string;
  location: string;
  audience: string;
  duration: number;
  scenes: SceneContent[];
  footer: string;
};
