import {Directive, ElementRef, Renderer, ViewChild} from '@angular/core'

@Directive({
  selector:'[displayChild]',
  host:{
      '(mouseover)': 'onMouseover()',
      '(mouseout)': 'onMouseout()'
  }
})
export class DisplayChildDirective {

  @ViewChild('child') child:ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer){
//    this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'transition','0.3s');
//    this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'backgroundColor','red')
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'transition','0.3s');
    this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'display','none')
  }
  onMouseover(){
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'display','');
  }
  onMouseout(){
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'display','none')

  }

}
