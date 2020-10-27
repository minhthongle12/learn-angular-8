import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject({maPhim:1,tenPhim:'end game'});
  public phimModal = this.data.asObservable();



  urlAPI = `https://movie0706.cybersoft.edu.vn/api/`;



  danhSachPhim = [
    {
      maPhim: 1,
      hinhAnh: 'assets/images/cetm.jpg',
      tenPhim: 'test phim 1',
      gia: 2000,
      soLike: 0
    },
    {
      maPhim: 2,
      hinhAnh: 'assets/images/cetm.jpg',
      tenPhim: 'test phim 2',
      gia: 2000,
      soLike: 0
    },
    {
      maPhim: 3,
      hinhAnh: 'assets/images/cetm.jpg',
      tenPhim: 'test phim 3',
      gia: 2000,
      soLike: 0
    },
    {
      maPhim: 4,
      hinhAnh: 'assets/images/cetm.jpg',
      tenPhim: 'test phim 4',
      gia: 2000,
      soLike: 0
    }
  ];


  constructor(private http: HttpClient) { }

  // getListMovie(): Observable<any>{
  //   const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`;
  //   return this.http.get(url).pipe(
  //     tap((data:any) => {
  //       //loading
  //     }),
  //     catchError(err => {
  //       return this.handleErr(err);
  //     })
  //   )
  // }

  // getMovieDetail(maPhim): Observable<any>{
  //   const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
  //   return this.http.get(url).pipe(
  //     tap((data:any) => {
  //       //loading
  //     }),
  //     catchError(err => {
  //       return this.handleErr(err);
  //     })
  //   )
  // }

  getMovieDetail(maPhim): Observable<any>{
    const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
    return this.get(uri);
  }


  // REFACTOR
  get(uri): Observable<any>{
    return this.http.get(this.urlAPI + uri).pipe(
      tap((data:any) => {
        //loading
      }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  }
  post(uri,data): Observable<any>{
    const url = this.urlAPI + uri;
    return this.http.post(url, data).pipe(
      tap((data:any) => {
        //loading
      }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  }

  // register(user): Observable<any>{
  //   const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`;
  //   return this.http.post(url, user).pipe(
  //     tap((data:any) => {
  //       //loading
  //     }),
  //     catchError(err => {
  //       return this.handleErr(err);
  //     })
  //   )
  // }
  
  // login(user): Observable<any>{
  //   const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;
  //   return this.http.post(url, user).pipe(
  //     tap((data:any) => {
  //       //loading
  //     }),
  //     catchError(err => {
  //       return this.handleErr(err);
  //     })
  //   )
  // }




  handleErr(err){
    switch(err.status){
      case 500:
        alert(err.error);
        break;
      default:
        break;
    }
    return throwError(err);
  }

  viewFilmModal(phim){
    this.data.next(phim);
  }


}
