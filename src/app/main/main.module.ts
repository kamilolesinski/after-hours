import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { components, MainRoutingModule } from './main-routing.module'

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
