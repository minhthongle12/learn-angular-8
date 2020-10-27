import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActiveGuard } from '../common/guard/can-active.guard';
import { AdminComponent } from './admin.component';
import { DashBoardComponent } from './dash-board/dash-board.component';


const routes: Routes = [
 {
   path:'',
   component: AdminComponent,
   children: [
    //  {path: '', component: AdminComponent},
     //dashboard là con của admin
     {path: 'dashboard', component: DashBoardComponent, canActivate: [CanActiveGuard]}
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
