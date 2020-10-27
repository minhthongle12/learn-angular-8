import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  danhSachNhanVien = [
    {
      ten: 'Nguyen A',
      tuoi: '18'
    },
    {
      ten: 'Nguyen B',
      tuoi: '19'
    },
    {
      ten: 'Nguyen C',
      tuoi: '20'
    }
  ];

  danhSachSanPham = [];

  constructor() { }

  ngOnInit() {
  }

  themSanPham(masp, tensp, giaca) {
    const objSp = {
      maSP: masp,
      tenSP: tensp,
      gia: giaca
    };
    this.danhSachSanPham.push(objSp);
  }

}
