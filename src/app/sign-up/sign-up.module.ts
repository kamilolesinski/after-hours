import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { components, SignUpRoutingModule } from './sign-up-routing.module';

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
