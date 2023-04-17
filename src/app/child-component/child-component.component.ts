import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() Message: any;

  message: string = "Hello Angular!"

  @Output() messageEvent = new EventEmitter<string>();


  

  constructor() { 
    console.log(this.Message)
  }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  ngOnInit(): void {
  }

}
