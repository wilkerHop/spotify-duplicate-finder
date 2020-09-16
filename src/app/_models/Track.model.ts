import { Artist } from '.';

export interface Track {
  addDate: Date;
  album: string;
  name: string;
  popularity: number;
  artists: string[];
  duration: number;
  explicit: boolean;
  uri: string;
  year: number;
}
