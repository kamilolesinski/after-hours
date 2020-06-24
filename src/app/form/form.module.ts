import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { PasswordComponent } from './password/password.component'
import { SubmitComponent } from './submit/submit.component'
import { UsernameComponent } from './username/username.component'
import { ValidationMessageComponent } from './validation-message/validation-message.component'

const exports = [
  PasswordComponent,
  SubmitComponent,
  UsernameComponent
]

@NgModule({
  declarations: [
    ValidationMessageComponent,
    ...exports
  ],
  exports: exports,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
