import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title = "";
  @Input() content = "";
  @Input() validated = false;
  @Input() fake = undefined;
  @Input() id = 0;

  @Output() onValidate = new EventEmitter();
  
  constructor() { }

  ngOnInit() {

  }

  onFake(){
    this.fake = true
    this.validated = true
    this.onValidate.emit({id: this.id,fake: this.fake, validated:this.validated});
  }
    
  onLegit(){
    this.fake = false
    this.validated = true
    this.onValidate.emit({id: this.id, fake: this.fake, validated:this.validated});
  }

}
