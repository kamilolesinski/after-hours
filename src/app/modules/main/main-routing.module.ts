import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MainComponent } from './main.component'

const routes: Routes = [{
  component: MainComponent,
  path: ''
}]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class MainRoutingModule { }

export const components = [MainComponent]
