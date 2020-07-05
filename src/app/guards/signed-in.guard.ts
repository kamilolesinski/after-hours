import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { CanLoad, Router, UrlTree } from '@angular/router'

import { Observable, of } from 'rxjs'
import { catchError, map, take } from 'rxjs/operators'

import { AppRoutes } from '../../config/routes'

@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanLoad {
  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  canLoad(): Observable<boolean | UrlTree> {
    return this.fireAuth.user
      .pipe(
        catchError(() => of<null>(null)),
        map(user => user ? true : this.router.parseUrl(AppRoutes.links.signIn)),
        take(1)
      )
  }
}
