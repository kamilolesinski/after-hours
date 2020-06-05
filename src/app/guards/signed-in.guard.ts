import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    this.router.navigate(['/sign-in'])
    return false
  }
}
