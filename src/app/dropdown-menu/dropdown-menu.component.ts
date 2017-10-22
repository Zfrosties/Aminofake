import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {

   showMenu=false

  constructor() { }
  
  ngOnInit() {
  }

  toggle(){
    this.showMenu=!this.showMenu
  }
  autoClose(){
    if(this.showMenu){
      this.showMenu=!this.showMenu
    }
    
  }

  
}
