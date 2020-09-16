import { Injectable } from '@angular/core';

import { CounterItem, Track } from '../_models';

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  tracks: Track[] = [];

  duplicateTracks: CounterItem[] = [];

  constructor() {}
}
