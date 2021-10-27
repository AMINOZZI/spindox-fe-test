import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/services/sender.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  date:string
  constructor(
    private senderService :SenderService
  ) { }

  ngOnInit(): void {
    // this.date = this.senderService.date
    let date = new Date(this.senderService.date.substring(0,10))
    this.date = date.toLocaleDateString()
    
  }

}
