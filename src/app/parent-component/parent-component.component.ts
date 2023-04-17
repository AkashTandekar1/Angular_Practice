import { Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  Message = "Parent to Child"


  messagedata:any;


  sendingdata:any;
  


  receiveMessage($event:any) {
    this.messagedata = $event
    console.log(this.messagedata)
  }

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {

    this.sharedService.sharedMessage.subscribe(message => this.sendingdata = message)
  }

}
