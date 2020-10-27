import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  dkSwitch = 'puple';
  constructor() { }

  ngOnInit() {
  }

  changeColor(color) {
    this.dkSwitch = color;
  }

}
