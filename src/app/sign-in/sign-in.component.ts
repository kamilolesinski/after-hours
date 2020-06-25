import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { Observable, throwError } from 'rxjs'

import { FormInterface } from '../interfaces/form.interface'

interface SignInFormInterface {
  readonly keepSignedIn: boolean,
  readonly password: '',
  readonly username: ''
}

@Component({
  selector: 'app-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements FormInterface {
  signInFailed = false
  signInForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group(this.signInFormInit())
  }

  onError(): void {
    this.signInFailed = true
    this.signInForm.reset(this.signInFormInit())
  }

  onSubmit(): void {
    this.fakeHTTPCall().subscribe({
      error: (): void => this.onError()
    })
  }

  private fakeHTTPCall(): Observable<never> {
    return throwError('')
  }

  private signInFormInit(): SignInFormInterface {
    return {
      keepSignedIn: false,
      password: '',
      username: ''
    }
  }
}
