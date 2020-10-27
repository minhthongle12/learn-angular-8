import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/common/services/data.service';
import { ItemPhimComponent } from '../item-phim/item-phim.component';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(ItemPhimComponent) tagListItemPhim: QueryList<ItemPhimComponent>;

  

  // danhSachLike = [
  //   { maPhim: 1, tenPhim: 'test phim', soLike: 0 },
  //   { maPhim: 2, tenPhim: 'test phim', soLike: 0 },
  //   { maPhim: 3, tenPhim: 'test phim', soLike: 0 },
  //   { maPhim: 4, tenPhim: 'test phim', soLike: 0 }
  // ];
  danhSachPhim;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.danhSachPhim = this.dataService.danhSachPhim;
    //observable là bđb nên có subsribe
    this.dataService.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP01').subscribe((res)=>{  
      this.danhSachPhim = res;
    })
  }

  thich(phim) {
    const movie = this.danhSachPhim.find(item => {
      return item.maPhim === phim.maPhim;
    });
    movie.soLike++;
  }

  themPhim(objPhim) {
    this.danhSachPhim.push(objPhim);
  }

  viewChildren() {
    this.tagListItemPhim.map(item => {
      if (item.phim.maPhim === 1) {
        item.phim.gia = 5000;
      }
    });
  }
}
