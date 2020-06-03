import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'

const routes: Routes = [
  {
    component: AppComponent,
    path: 'main'
  },
  {
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule),
    path: 'sign-in'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
