import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
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
