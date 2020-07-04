import { Component, Input, OnDestroy } from '@angular/core'
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  Validators,
  ValidationErrors
} from '@angular/forms'

import { Subject } from 'rxjs'
import { map, takeUntil } from 'rxjs/operators'

import { AppProvider } from '../../utils'

type InputType = 'password' | 'text'

@Component({
  providers: [
    AppProvider.create(PasswordComponent, NG_VALIDATORS),
    AppProvider.create(PasswordComponent, NG_VALUE_ACCESSOR)
  ],
  selector: 'app-password',
  styleUrls: ['./password.component.scss'],
  templateUrl: './password.component.html'
})
export class PasswordComponent implements ControlValueAccessor, OnDestroy, Validator {
  @Input() readonly label = 'Password'

  buttonLabel = 'Show'
  inputType: InputType = 'password'
  password: FormControl

  private finish = new Subject()
  private readonly initValue = ''
  private readonly passwordMaxLength = 20

  constructor() {
    this.password = new FormControl(this.initValue, Validators.required)
  }

  ngOnDestroy(): void {
    this.finish.next()
    this.finish.complete()
  }

  changeInputType(): void {
    const isPassword = (this.inputType === 'password')
    this.buttonLabel = isPassword ? 'Hide' : 'Show'
    this.inputType = isPassword ? 'text' : 'password'
  }

  checkCapsLock(event: KeyboardEvent | MouseEvent): void {
    const isCapsLock = event.getModifierState('CapsLock')
    if (isCapsLock) {
      console.log('CapsLock is on ...')
    } else if (isCapsLock === false) {
      console.log('CapsLock is off ...')
    }
  }

  registerOnChange(fn: any): void {
    this.password.valueChanges
      .pipe(
        map(value => this.slice(value)),
        takeUntil(this.finish)
      )
      .subscribe(fn)
  }

  registerOnTouched(): void { }

  validate(): ValidationErrors | null {
    return this.password.valid ? null : { valid: false }
  }

  writeValue(value: any): void {
    this.password.reset(this.initValue)
    this.password.setValue(value, { emitEvent: false })
  }

  private slice(p: any): string {
    if (typeof p !== 'string') {
      return ''
    }
    return (p.length <= this.passwordMaxLength) ? p : p.slice(0, this.passwordMaxLength)
  }
}
