import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { components, SignUpRoutingModule } from './sign-up-routing.module'
import { SignInModule } from '../sign-in/sign-in.module'

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignUpRoutingModule, // fix it
    SignInModule
  ]
})
export class SignUpModule { }
