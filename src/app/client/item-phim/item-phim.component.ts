import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '@service/data.service';
// import { DataService } from 'src/app/common/services/data.service';


@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() phim;
  @Output() eventPhim = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.phim);
  }

  like() {
    this.eventPhim.emit(this.phim);
  }

  xemChiTietModal(){
    this.dataService.viewFilmModal(this.phim);
  }

}
