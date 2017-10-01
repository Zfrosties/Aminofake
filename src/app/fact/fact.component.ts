import { FactService } from './../fact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {

  facts=[];

  constructor(private fService : FactService) {}

  ngOnInit() {
    this.fService.getAll()
      .subscribe(rep =>{
        this.facts = rep;
    })
  }



}
