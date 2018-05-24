import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'App Store';

  constructor(public authService: AuthService) {
    authService.handleAuthentication();
  }

  ngOnInit() {
  }

}
