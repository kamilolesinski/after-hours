import { Component, OnDestroy, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { Form } from '../interfaces/form.interface'
import { AppRoutes } from '../../config/routes'

enum SignInError {
  email = 'auth/invalid-email',
  password = 'auth/wrong-password'
}

interface SignInForm {
  readonly email: string,
  readonly keepSignedIn: boolean,
  readonly password: string
}

@Component({
  selector: 'app-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements Form, OnDestroy, OnInit {
  signInFailed = false
  signInForm: FormGroup
  readonly signUpLink = AppRoutes.links.signUp

  private finish = new Subject<void>()
  private initValue: SignInForm = {
    email: '',
    keepSignedIn: false,
    password: ''
  }

  constructor(
    private fireAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.formBuilder.group({ ...this.initValue })
  }

  ngOnInit(): void {
    this.fireAuth.authState
      .pipe(takeUntil(this.finish))
      .subscribe({
        error: e => this.errorHandler(e),
        next: () => this.router.navigate([AppRoutes.links.main])
      })
  }

  ngOnDestroy(): void {
    this.finish.next()
    this.finish.complete()
  }

  onSubmit(): void {
    const value = this.signInForm.value as SignInForm
    this.fireAuth.signInWithEmailAndPassword(value.email, value.password)
  }

  private errorHandler(e: any): void {
    this.signInFailed = [
      SignInError.email,
      SignInError.password
    ].includes(e?.code)
    this.signInForm.reset({ ...this.initValue })
  }
}
