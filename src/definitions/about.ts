export type TAbout = {
  status: 'loading' | 'loaded';
  data: TAboutData | undefined;
};

export type TAboutData = {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
};
