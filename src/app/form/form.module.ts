import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { PasswordComponent } from './password/password.component'
import { UsernameComponent } from './username/username.component'

const exports = [
  PasswordComponent,
  UsernameComponent
]

@NgModule({
  declarations: exports,
  exports: exports,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
