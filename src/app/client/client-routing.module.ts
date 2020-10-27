import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeActiveGuard } from '../common/guard/can-de-active.guard';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ClientComponent } from './client.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path:"",
    component: ClientComponent,
    children: [
      // { path: '', component: ClientComponent},
      {path: 'danh-sach-phim', component: DanhSachPhimComponent},
      {path: 'chi-tiet/:id', component:ChiTietPhimComponent},
      {path: 'chi-tiet', component:ChiTietPhimComponent},
      {path:'dang-ky', component:DangKyComponent, canDeactivate: [CanDeActiveGuard]},
      {path:'dang-nhap', component: DangNhapComponent},
      {path:'pipes', component: PipesComponent}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
