import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';

@NgModule({
  declarations: [InteractionComponent, DanhSachPhimComponent, ItemPhimComponent],
  imports: [
    CommonModule
  ],
  exports: [InteractionComponent]
})
export class InteractionModule { }
