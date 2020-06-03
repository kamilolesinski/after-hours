import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { components, SignInRoutingModule } from './sign-in-routing.module'

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
