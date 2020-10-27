import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = 'red';
    // this.render2.setStyle(this.ele.nativeElement, 'background-color', 'red');
  }
  @HostBinding('style.backgroundColor') bgColor = 'aqua';

  @HostListener('mouseenter') SuKienHover() {
    this.ele.nativeElement.style.backgroundColor = 'yellow';
    // this.render2.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
  }
  @HostListener('mouseleave') SuKienLeave() {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'blue');
  }

}
