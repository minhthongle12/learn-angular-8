import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {

  //ng g g CanActiveGuard

  constructor(private router: Router){}


  canActivate(){
     if(localStorage.getItem('user')){
       const user = JSON.parse(localStorage.getItem('user'));
       if(user.maLoaiNguoiDung ==="QuanTri"){
          return true;
       }  
     
     }
    
     this.router.navigate(['admin'])
     return false;
   }
}
