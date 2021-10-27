import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { InfoProfile } from 'src/app/interfaces/infoprofile.interface'
import { SenderService } from 'src/app/services/sender.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  infoProfile: InfoProfile[] = [];
  imagePath:string
  name:object;
  email:string;
  date:string;
  location:object;
  phone:string;
  
 

  constructor(
    private configService: ConfigService,
    private senderService :SenderService
  ) {}

  ngOnInit(): void {
    this.showData()
   
  }

  showData() {
    this.configService.getConfig().subscribe(
         (data:any) => {
          this.infoProfile = data['results']
          this.sendToChildComponent()
      }
    )
  }
  sendToChildComponent(){
    this.imagePath = this.infoProfile[0]['picture']['large'];
    this.senderService.name =  this.infoProfile[0]['name']
    this.senderService.email =  this.infoProfile[0]['email']
    this.senderService.date =  this.infoProfile[0]['dob']['date']
    this.senderService.location =  this.infoProfile[0]['location']
    this.senderService.phone =  this.infoProfile[0]['phone']
    this.senderService.login =  this.infoProfile[0]['login']
  }

}
