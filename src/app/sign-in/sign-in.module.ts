import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';

import { components, SignInRoutingModule } from './sign-in-routing.module'
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
