import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { PasswordComponent } from './password/password.component'
import { SubmitComponent } from './submit/submit.component'
import { EmailComponent } from './email/email.component'
import { ValidationMessageComponent } from './validation-message/validation-message.component'

const exports = [
  PasswordComponent,
  SubmitComponent,
  EmailComponent
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
