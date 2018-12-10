import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  @Input()
  header:string
   @Input()
  msg:string

  constructor() { }

  ngOnInit() {
  }

}
