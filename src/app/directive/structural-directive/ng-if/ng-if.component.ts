import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  status = false;
  statusLogin = true;

  constructor() { }

  ngOnInit() {
  }

  dangXuat() {
    this.statusLogin = false;
  }

  dangNhap() {
    this.statusLogin = true;
  }
}
