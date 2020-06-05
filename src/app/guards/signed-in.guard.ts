import { Injectable } from '@angular/core'
import { CanActivate, Router, CanLoad } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanLoad {
  constructor(private router: Router) { }

  canLoad(): boolean {
    this.router.navigate(['/sign-in'])
    return false
  }
}
