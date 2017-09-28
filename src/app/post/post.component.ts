import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

  }

  onFake(){
    this.fake = true
    this.validated = true
  }
    
  onLegit(){
    this.fake = false
    this.validated = true
  }

}
