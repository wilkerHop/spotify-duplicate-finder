import { Track } from '.';

export interface CounterItem {
  count: number;
  tracks: Track[];
  artists: string[];
  name: string;
}
