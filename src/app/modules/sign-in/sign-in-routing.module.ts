import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignInComponent } from './sign-in.component'

const routes: Routes = [{
  component: SignInComponent,
  path: ''
}]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class SignInRoutingModule { }

export const components = [SignInComponent]
