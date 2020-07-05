import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignedInGuard } from './guards/signed-in.guard'
import { AppRoutes } from '../config/routes'

const routes: Routes = [
  {
    canLoad: [SignedInGuard],
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
    path: AppRoutes.paths.main
  },
  {
    loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule),
    path: AppRoutes.paths.signIn
  },
  {
    loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule),
    path: AppRoutes.paths.signUp
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.links.main
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
