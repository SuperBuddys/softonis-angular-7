import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component implements OnInit {

  @Input('learn')
  btn1:string;
  
  constructor() { }

  ngOnInit() {
  }

}
