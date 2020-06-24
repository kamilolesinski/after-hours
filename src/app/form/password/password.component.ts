import { Component, Input, OnDestroy } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator, Validators, ValidationErrors } from '@angular/forms'

import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { createProvider } from '../../utils/utils'

type InputType = 'password' | 'text'

@Component({
  providers: [
    createProvider(PasswordComponent, NG_VALIDATORS),
    createProvider(PasswordComponent, NG_VALUE_ACCESSOR)
  ],
  selector: 'app-password',
  styleUrls: ['./password.component.scss'],
  templateUrl: './password.component.html'
})
export class PasswordComponent implements ControlValueAccessor, OnDestroy, Validator {
  @Input() readonly label = 'Password'

  buttonLabel = 'Show'
  inputType: InputType = 'password'
  password = new FormControl('', Validators.required)

  private readonly finish = new Subject()

  ngOnDestroy(): void {
    this.finish.next()
    this.finish.complete()
  }

  changeInputType(): void {
    if (this.inputType === 'password') {
      this.setInputType('text')
      return;
    }
    this.setInputType('password')
  }

  registerOnChange(fn: any): void {
    this.password.valueChanges
      .pipe(takeUntil(this.finish))
      .subscribe(fn)
  }

  registerOnTouched(): void { }

  validate(): ValidationErrors | null {
    return this.password.valid ? null : { valid: false }
  }

  writeValue(value: any): void {
    this.password.reset()
    this.password.setValue(value, { emitEvent: false })
  }

  private setInputType(type: InputType): void {
    this.inputType = type
    this.buttonLabel = (type === 'password') ? 'Show' : 'Hide'
  }
}
