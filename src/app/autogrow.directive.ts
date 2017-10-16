import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
  selector:'[autogrow]',
  host:{
      '(focus)': 'onFocus()',
      '(blur)': 'onBlur()'
  }
})
export class AutogrowDirective {

  constructor(private el: ElementRef, private renderer: Renderer){
    this.renderer.setElementStyle(this.el.nativeElement,'transition','0.3s');
    this.renderer.setElementStyle(this.el.nativeElement,'width','200px')
}
onFocus(){
    this.renderer.setElementStyle(this.el.nativeElement,'width','100%');
}
onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement,'width','200px')

}

}
