import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  DangNhap(formValue) {
    const objDangKy = {
      taiKhoan: formValue.taiKhoan,
      matKhau: formValue.matKhau,
    };
    this.dataService.post('QuanLyNguoiDung/DangNhap',objDangKy).subscribe((res) => {
      //buoi 7, guard
      localStorage.setItem('user',JSON.stringify(res));
    })
  }


}
