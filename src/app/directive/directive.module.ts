import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { NgIfComponent } from './structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './structural-directive/ng-switch/ng-switch.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { NgClassComponent } from './attribute-directive/ng-class/ng-class.component';
import { NgStyleComponent } from './attribute-directive/ng-style/ng-style.component';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [DirectiveComponent, StructuralDirectiveComponent, NgIfComponent, NgForComponent, NgSwitchComponent, AttributeDirectiveComponent, NgClassComponent, NgStyleComponent, HighLightDirective],
  imports: [
    CommonModule
  ],
  exports: [DirectiveComponent]
})
export class DirectiveModule { }
