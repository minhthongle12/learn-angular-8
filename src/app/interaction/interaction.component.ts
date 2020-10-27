import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @ViewChild(DanhSachPhimComponent, { static: false }) tagDanhSachPhim: DanhSachPhimComponent;

  constructor() { }

  ngOnInit() {
  }

  addMovie(mPhim, tPhim, gPhim, aPhim) {
    const phim = {
      maPhim: mPhim,
      tenPhim: tPhim,
      gia: gPhim,
      hinhAnh: aPhim,
      soLike: 0
    };
    // this.tagDanhSachPhim.themPhim(phim);
    this.tagDanhSachPhim.danhSachPhim.push(phim);
  }

}
