import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/services/sender.service';



@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  firstName: string;
  lastName: string;
  
  constructor(
    private senderService :SenderService
  ) { }

  ngOnInit(): void {
    let object = this.senderService.name
    this.firstName = object['first']
    this.lastName = object['last']
  }

}
