import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { Observable, throwError } from 'rxjs'

import { FormInterface } from '../interfaces/form.interface'

@Component({
  selector: 'app-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements FormInterface {
  signInFailed = false
  signInForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      password: [''],
      username: ['']
    })
  }

  onError(): void {
    this.signInFailed = true
    this.signInForm.reset({
      password: '',
      username: ''
    })
  }

  onSubmit(): void {
    this.fakeHTTPCall().subscribe({
      error: (): void => this.onError()
    })
  }

  private fakeHTTPCall(): Observable<never> {
    return throwError('')
  }
}
