import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { CanLoad, Router } from '@angular/router'

import { links } from '../../config/routes'

@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanLoad {
  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  async canLoad(): Promise<boolean> {
    return await this.fireAuth.currentUser
      .then(user => {
        if (user) {
          console.log('Signing in ...')
          return true;
        } else {
          console.log('Redirecting ...')
          this.router.navigate([links.signIn])
          return false;
        }
      })
      .catch(() => false)
  }
}
