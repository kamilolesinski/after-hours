import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  styleUrls: ['./sign-up.component.scss'],
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  signUpForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      password: [''],
      passwordRepeated: [''],
      username: ['']
    })
   }

  onSubmit(): void {
    console.log('Submitting sign up form ...')
  }
}
