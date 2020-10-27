import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BaiTap1Component } from './bai-tap1/bai-tap1.component';
import { ClientComponent } from './client/client.component';
// import { DemoComponent } from './demo/demo.component';
// import { DanhSachPhimComponent } from './interaction/danh-sach-phim/danh-sach-phim.component';

const routes: Routes = [
  // {
  //   path: '', component: ClientComponent
  // },
  {
    path:'',
    loadChildren: './client/client.module#ClientModule'
  },
 
  {
    path: 'client', component: ClientComponent
  },

  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },

 
  
  {
    path: '**', component: BaiTap1Component //page not found
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
