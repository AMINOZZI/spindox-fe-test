import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/services/sender.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  location:any
  number:number
  name:string
  city:string

  constructor(
    private senderService :SenderService
  ) { }

  ngOnInit(): void {
    this.location = this.senderService.location
    this.number = this.location['street']['number']
    this.name = this.location['street']['name']
   
  }

}
