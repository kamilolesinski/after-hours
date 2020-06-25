import { Component } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

import { Form } from '../interfaces/form.interface'

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
export class SignInComponent implements Form {
  signInFailed = false
  signInForm: FormGroup

  constructor(
    private fireAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.formBuilder.group(this.signInFormInit())
  }

  onSubmit(): void {
    const formValues: SignInForm = this.signInForm.value
    this.fireAuth.signInWithEmailAndPassword(formValues.email, formValues.password)
      .then((): void => {
        this.router.navigate(['/main'])
      })
      .catch((error): void => {
        this.signInFailed = [
          SignInError.email,
          SignInError.password
        ].includes(error?.code)
        this.signInForm.reset(this.signInFormInit())
      })
  }

  private signInFormInit(): SignInForm {
    return {
      email: '',
      keepSignedIn: false,
      password: ''
    }
  }
}
