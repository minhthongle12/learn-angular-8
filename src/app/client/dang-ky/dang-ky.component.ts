import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';
import { DataService } from "src/app/common/services/data.service";

@Component({
  selector: "app-dang-ky",
  templateUrl: "./dang-ky.component.html",
  styleUrls: ["./dang-ky.component.scss"],
})
export class DangKyComponent implements OnInit {

  @ViewChild('formDangKy', {static:false}) frmDangKy: NgForm;
 

  defaultValue = {
    taiKhoan: "LeMinhThong",
    matKhau: "123",
    email: "thong@gmail.com",
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  canDeactivate(){
    return this.frmDangKy.submitted || !this.frmDangKy.dirty; //dirty là nhập gì đó vào form.... return false||false
  }

  dangKy(formValue) {
    const objDangKy = {
      taiKhoan: formValue.taiKhoan,
      matKhau: formValue.matKhau,
      email: formValue.email,
      soDt: formValue.soDT,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: formValue.hoTen,
    };
    this.dataService.post('QuanLyNguoiDung/DangKy', objDangKy).subscribe((res) => {
      alert("Dang Ky thanh cong");
    });
  }
  
}



