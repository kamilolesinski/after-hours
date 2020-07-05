import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { components, SignUpRoutingModule } from './sign-up-routing.module'
import { FormModule } from '../form/form.module'

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
