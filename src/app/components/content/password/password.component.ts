import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/services/sender.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  password: string;

  constructor(
    private senderService :SenderService
  ) { }

  ngOnInit(): void {
    this.password = this.senderService.login.password
  }

}
