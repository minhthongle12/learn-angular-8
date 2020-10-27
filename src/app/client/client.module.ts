import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";
import { HeaderComponent } from "./header/header.component";
import { ClientRoutingModule } from "./client-routing.module";
import { DanhSachPhimComponent } from "./danh-sach-phim/danh-sach-phim.component";
import { ItemPhimComponent } from "./item-phim/item-phim.component";
import { ChiTietPhimComponent } from "./chi-tiet-phim/chi-tiet-phim.component";
import { DangKyComponent } from "./dang-ky/dang-ky.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DangNhapComponent } from "./dang-nhap/dang-nhap.component";
import { PipesComponent } from "./pipes/pipes.component";
import { PipesModule } from '../common/pipes/pipes.module';

@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    DanhSachPhimComponent,
    ItemPhimComponent,
    ChiTietPhimComponent,
    DangKyComponent,
    DangNhapComponent,
    PipesComponent,
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule, //import để làm form trong dangky
    ReactiveFormsModule, // để làm form reactive
    PipesModule
    
  ],
  exports: [ClientComponent],
})
export class ClientModule {}
