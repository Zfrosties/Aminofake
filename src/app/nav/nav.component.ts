import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayDropDownMenu(e){
    e.target.firstElementChild.addClass="none";
    console.log(e.target.firstElementChild)
  }

}
