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
    this.facts =this.fService.getFacts()
  }

  validate(updatedFact){
    this.fService.update(updatedFact)
      .subscribe(x =>console.log(x));
  }



}
