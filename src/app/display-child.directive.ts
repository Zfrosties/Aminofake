import {Directive, ElementRef, Renderer, ViewChild} from '@angular/core'

@Directive({
  selector:'[displayChild]',
  host:{
      '(mouseover)': 'onMouseover($event.target)',
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
    //this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'transition','0.5s');
    this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'display','none')
    this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'opacity','0')
  }
  onMouseover(target){
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'display','');
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'opacity','1');
    }
    onMouseout(){
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'display','none');
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropDownMenu'),'opacity','0');

    }


}
