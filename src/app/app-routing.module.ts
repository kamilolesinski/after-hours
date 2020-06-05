import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignedInGuard } from './guards/signed-in.guard'

const routes: Routes = [
  {
    canLoad: [SignedInGuard],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    path: 'main'
  },
  {
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule),
    path: 'sign-in'
  },
  {
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule),
    path: 'sign-up'
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
