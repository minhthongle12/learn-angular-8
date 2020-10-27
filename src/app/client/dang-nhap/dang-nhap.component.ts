import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  formDangNhap: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formDangNhap = new FormGroup({
      TaiKhoan: new FormControl("abc",[Validators.required, Validators.maxLength(6)]),
      MatKhau: new FormControl(null,Validators.minLength(4))
    });
  }

  DangNhap(){
    console.log(this.formDangNhap)
  }

}
