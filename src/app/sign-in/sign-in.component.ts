import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FormInterface } from '../interfaces/form.interface';

@Component({
  selector: 'app-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements FormInterface {
  signInForm: FormGroup

  constructor(private formBuilder: FormBuilder) { 
    this.signInForm = this.formBuilder.group({
      password: [''],
      username: ['']
    })
  }

  onSubmit(): void {
    console.log('Submitting sign in form ...')
  }
}
