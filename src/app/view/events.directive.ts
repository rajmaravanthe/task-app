import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvents]',
})
export class EventsDirective {

  rowDate;
  rowBeforeConvert;
  currentDate = (new Date().getMonth() + 1 ) + "/" + new Date().getDate() + "/" + new Date().getFullYear()  ;;
  constructor(public renderer: Renderer, public elementRef: ElementRef) {

  }

  @HostListener('mouseenter')
  onmouseenter() {
    this.rowBeforeConvert = this.elementRef.nativeElement.cells[2].innerHTML;
    let ref = this.rowBeforeConvert.substring(3,5) + "/" + this.rowBeforeConvert.substring(0,2) + "/" + this.rowBeforeConvert.substring(6,10)  ;
    this.rowDate = (new Date(ref).getMonth() + 1 ) + "/" + new Date(ref).getDate() + "/" + new Date(ref).getFullYear();
    if (this.currentDate == this.rowDate) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')
    } else if (new Date(this.rowDate) < new Date(this.currentDate)) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red')
    } else {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow')
    }
  }
  @HostListener('mouseleave')
  onmouseleave() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', '')
  }
}
