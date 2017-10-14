import { FactService } from './../fact.service';
import {FormControl, FormGroup,Validators, FormBuilder} from '@angular/forms'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-fact',
  templateUrl: './submit-fact.component.html',
  styleUrls: ['./submit-fact.component.css']
})
export class SubmitFactComponent implements OnInit {

  form: FormGroup

  constructor(private fService : FactService, fb: FormBuilder) {
    this.form = fb.group({
      title:['',Validators.required],
      content:['',Validators.required]
    })

  }



  ngOnInit() {
  }

  createFact(){
    this.fService.create({title:"rij",content:"ergerg"})
      .subscribe()
  }

}
