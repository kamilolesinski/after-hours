import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignUpComponent } from './sign-up.component'

const routes: Routes = [{
  component: SignUpComponent,
  path: ''
}]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class SignUpRoutingModule { }

export const components = [SignUpComponent]
