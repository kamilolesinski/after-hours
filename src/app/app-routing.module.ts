import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignedInGuard } from './guards/signed-in.guard'

const routes: Routes = [
  {
    canActivate: [SignedInGuard],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    path: 'main'
  },
  {
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule),
    path: 'sign-in'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
