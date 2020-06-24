import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { FormInterface } from '../interfaces/form.interface'

@Component({
  selector: 'app-sign-up',
  styleUrls: ['./sign-up.component.scss'],
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements FormInterface {
  signUpForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      password: [''],
      passwordRepeated: [''],
      username: ['']
    })
  }

  onError(): void { }

  onSubmit(): void {
    console.log('Submitting sign up form ...')
  }
}
