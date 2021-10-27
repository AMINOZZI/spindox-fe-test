import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/content/address/address.component';
import { BirthdayComponent } from './components/content/birthday/birthday.component';
import { EmailComponent } from './components/content/email/email.component';
import { NameComponent } from './components/content/name/name.component';
import { NumberComponent } from './components/content/number/number.component';
import { PasswordComponent } from './components/content/password/password.component';

const routes: Routes = [
  {
    path: 'name',
    component: NameComponent
},
{
    path: 'email',
    component: EmailComponent
},
{
  path: 'birthday',
  component: BirthdayComponent
},
{
  path: 'address',
  component: AddressComponent
},
{
  path: 'number',
  component: NumberComponent
},
{
  path: 'password',
  component: PasswordComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
