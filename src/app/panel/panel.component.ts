import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { TracksService } from '../_services';

import { CounterItem, Track } from '../_models';
import { ArtistResponse, Item, TrackResponse } from '../_models/SpotifyAPI';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass'],
})
export class PanelComponent implements OnInit {
  permit = new BehaviorSubject(false);

  lastOffset = 0;

  duplicateTracks: CounterItem[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private tracksService: TracksService,
  ) {
    this.permit.subscribe(this.getTracks);
    this.checkAuthorizationCode();

    this.setPermit();
  }

  ngOnInit() {}

  openDetails = (event: MouseEvent) => {
    const target = (event.target as HTMLSpanElement).parentElement
      .parentElement;

    target.classList.contains('open')
      ? target.classList.toggle('open')
      : target.classList.add('open');
  };

  private findDuplicates = () => {
    const { tracks } = this.tracksService;

    const counterMap = tracks.reduce((acc, cur) => {
      const key = `${cur.name}|*|${cur.artists}`;

      acc[key] = {
        artists: cur.artists,
        name: cur.name,
        count: (acc[key]?.count ?? 0) + 1,
        tracks: [...(acc[key]?.tracks ?? []), cur],
      };

      return acc;
    }, {} as Record<string, CounterItem>);

    const duplicateTracks = Object.values(counterMap)
      .filter(e => e.count > 1)
      .sort((a, b) => b.count - a.count);

    this.duplicateTracks = duplicateTracks;
    console.log({ duplicateTracks });
  };

  private getTracks = (permit: boolean) => {
    if (!permit) {
      return;
    }

    const access_token = localStorage.getItem('access_token');

    if (access_token) {
      this.http
        .get(
          `https://api.spotify.com/v1/me/tracks?limit=50&offset=${this.lastOffset}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        )
        .subscribe(({ next, items, offset }: TrackResponse) => {
          this.lastOffset = offset + 50;

          this.saveTracks(items);

          if (next) {
            this.getTracks(true);
          } else {
            this.findDuplicates();
          }
        }, this.refreshToken);
    }
  };

  private saveTracks = (tracks: Item[]) => {
    this.tracksService.tracks.push(
      ...tracks.map(({ added_at, track }) => ({
        addDate: new Date(added_at),
        album: track.album.name,
        name: track.name,
        popularity: track.popularity,
        artists: track.artists.map(a => a.name),
        duration: track.duration_ms,
        explicit: track.explicit,
        uri: track.uri,
        year: +track.album.release_date.split('-')[0],
      })),
    );
  };

  private refreshToken = () => {
    debugger;
    const refresh_token = localStorage.getItem('refresh_token');

    this.http
      .post(
        'https://accounts.spotify.com/api/token',
        `grant_type=refresh_token&refresh_token=${refresh_token}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization:
              'Basic NmRhMjRkZDYzNjRmNGRmMzkxZWNlNDIyNDYyNTI5Y2I6OTM4ZDQzMjEwNGFlNDc2ODk2ZjlhMDI4N2I5MTc5Mzk=',
          },
        },
      )
      .subscribe(this.saveToken, err =>
        console.error('quebrou ao revalidar token', err),
      );
  };

  private checkAuthorizationCode() {
    this.route.queryParamMap.subscribe(params => {
      const code = params.get('code');

      if (!code) {
        if (!localStorage.getItem('access_token')) {
          this.router.navigateByUrl('/login');
        }
        return;
      }

      localStorage.clear();

      this.http
        .post(
          `https://accounts.spotify.com/api/token`,
          `grant_type=authorization_code&code=${code}&redirect_uri=http://127.0.0.1:4200/panel`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization:
                'Basic NmRhMjRkZDYzNjRmNGRmMzkxZWNlNDIyNDYyNTI5Y2I6OTM4ZDQzMjEwNGFlNDc2ODk2ZjlhMDI4N2I5MTc5Mzk=',
            },
          },
        )
        .subscribe(
          res => {
            this.saveToken(res);
          },
          () => this.router.navigateByUrl('/login'),
        );
    });
  }

  private setPermit() {
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
      this.permit.next(true);
    }
  }

  private saveToken = (res: any) => {
    console.log('saveToken', res);

    localStorage.setItem('access_token', res.access_token);

    if (res.refresh_token) {
      localStorage.setItem('refresh_token', res.refresh_token);
    }
    console.log(res);

    this.setPermit();

    return this.router.navigateByUrl('/panel');
  };

  private logout() {
    localStorage.clear();

    this.router.navigateByUrl('/login');
  }
}
