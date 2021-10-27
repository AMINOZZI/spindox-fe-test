import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/services/sender.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  phone: string;

  constructor(
    private senderService :SenderService
  ) { }

  ngOnInit(): void {
    this.phone = this.senderService.phone
  }

}
