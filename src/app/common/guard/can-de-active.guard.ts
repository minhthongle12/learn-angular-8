import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DangKyComponent } from 'src/app/client/dang-ky/dang-ky.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeActiveGuard implements CanDeactivate<DangKyComponent> {
  canDeactivate(component){
    return (
      component.canDeactivate() || window.confirm("Bạn có muốn rời khỏi trang")
      //switch DangKyComponent
    );
  }
    
  
  
}
