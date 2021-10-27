import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { NameComponent } from './components/content/name/name.component';
import { PasswordComponent } from './components/content/password/password.component';
import { NumberComponent } from './components/content/number/number.component';
import { AddressComponent } from './components/content/address/address.component';
import { BirthdayComponent } from './components/content/birthday/birthday.component';
import { EmailComponent } from './components/content/email/email.component';
import { SenderService } from './services/sender.service';



@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ToolbarComponent,
    ProfileComponent,
    NameComponent,
    PasswordComponent,
    NumberComponent,
    AddressComponent,
    BirthdayComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ConfigService,SenderService, {
    provide: LOCALE_ID,
    useValue: 'en'
},],
  bootstrap: [AppComponent]
})
export class AppModule { }
