import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup

  constructor(private formBuilder: FormBuilder) { 
    this.signInForm = this.formBuilder.group({
      password: [''],
      username: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Submit ...')
  }
}
