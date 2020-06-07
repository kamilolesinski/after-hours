import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';

import { components, SignInRoutingModule } from './sign-in-routing.module'
import { PasswordComponent } from './password/password.component';
import { UsernameComponent } from './username/username.component';

@NgModule({
  declarations: [
    PasswordComponent,
    UsernameComponent,
    ...components,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
