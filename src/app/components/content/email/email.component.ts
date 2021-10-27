import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/services/sender.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  email: string

  constructor(
    private senderService :SenderService
  ) { }

  ngOnInit(): void {
    this.email = this.senderService.email
  }

}
