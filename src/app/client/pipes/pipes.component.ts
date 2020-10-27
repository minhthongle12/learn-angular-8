import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'cyBerSoft';
  ngay = new Date();
  giaTien = 10.1423;
  
  constructor() { }

  //vào chạy liền
  ngOnInit() {
  }


  //html render xong thì hàm này mới chạy
  ngAfterViewInit() {

  }

  //thoát khỏi component thì destroy data 
  ngOnDestroy(){

  }

}

