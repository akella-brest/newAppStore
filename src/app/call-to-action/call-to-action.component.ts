import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {
  public callTo: string = 'true';

  constructor() { }

  ngOnInit() {
    this.getCTA();
  }

  getCTA(): void {
    const action = JSON.parse(localStorage.getItem('callTo'));
    return JSON.parse(action || action !== null);
  }
}

