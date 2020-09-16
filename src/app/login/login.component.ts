import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  private client_id = 'client_id=6da24dd6364f4df391ece422462529cb';

  private redirect_uri = 'redirect_uri=http://127.0.0.1:4200/panel';

  private response_type = 'response_type=code';

  private scope = 'scope=' + ['user-read-email', 'user-library-read'].join(' ');

  authUrl = `https://accounts.spotify.com/authorize?${this.client_id}&${this.response_type}&${this.redirect_uri}&${this.scope}`;

  constructor() {}

  ngOnInit(): void {}
}
