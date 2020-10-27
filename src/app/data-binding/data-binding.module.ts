import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { DataBindingComponent } from './data-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DataBindingComponent, OneWayBindingComponent, TwoWayBindingComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [DataBindingComponent]
})
export class DataBindingModule { }
