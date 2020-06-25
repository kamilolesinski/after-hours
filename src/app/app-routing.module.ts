import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignedInGuard } from './guards/signed-in.guard'
import { links, paths } from '../config/routes'

const routes: Routes = [
  {
    canLoad: [SignedInGuard],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    path: paths.main
  },
  {
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule),
    path: paths.signIn
  },
  {
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule),
    path: paths.signUp
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: links.main
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
