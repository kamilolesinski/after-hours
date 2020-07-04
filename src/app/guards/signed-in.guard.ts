import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { CanLoad, Router } from '@angular/router'

import { Observable, of } from 'rxjs'
import { catchError, map, take } from 'rxjs/operators'

import { AppRoutes } from '../../config/routes'

@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanLoad {
  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  canLoad(): Observable<boolean> {
    // try {
    //   const user = await this.fireAuth.currentUser
    //   if (user) {
    //     console.log('Signing in ...')
    //     return true;
    //   } else {
    //     console.log('Redirecting ...')
    //     this.router.navigate([AppRoutes.links.signIn])
    //     return false;
    //   }
    // } catch (e) {
    //   return false;
    // }
    return this.fireAuth.user
      .pipe(
        catchError(() => of(this.redirect())),
        map(user => user ? true : this.redirect()),
        take(1)
      )
  }

  private redirect(): boolean {
    this.router.navigate([AppRoutes.links.signIn])
    return false
  }
}
