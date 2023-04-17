import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  message:any;

  data:any = []
  constructor(private userService: DataserviceService,private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedMessage.subscribe(message => this.message = message)

  }

  newMessage() {
    this.sharedService.nextMessage("Second Message")
  }

  Getdata():void{
    this.userService.getRepos().subscribe((response) => {
      this.data = response;
     })

       console.log(this.data)
  }

}
