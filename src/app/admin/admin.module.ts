import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, DashBoardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
