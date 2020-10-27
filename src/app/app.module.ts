import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BaiTap1Component } from './bai-tap1/bai-tap1.component';
import { HeaderComponent } from './bai-tap1/header/header.component';
import { ContentComponent } from './bai-tap1/content/content.component';
import { FooterComponent } from './bai-tap1/footer/footer.component';
import { SidebarComponent } from './bai-tap1/sidebar/sidebar.component';
import { ClientModule } from './client/client.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectiveModule } from './directive/directive.module';
import { InteractionModule } from './interaction/interaction.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdminModule } from './admin/admin.module';
import {AuthInterceptor} from './common/interceptor/jwt.interceptor';
import { ModalComponent } from './modal/modal.component';
// import { ShortcutPipe } from './common/pipes/shortcut.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BaiTap1Component,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    DataBindingModule,
    DirectiveModule,
    InteractionModule,
    HttpClientModule,
    AdminModule,
    BrowserAnimationsModule, //import để xử lí giao tiếp với BE
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
