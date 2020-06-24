import { Component, Input, OnDestroy } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator, Validators, ValidationErrors } from '@angular/forms'

import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { createProvider } from '../../utils/utils'

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

  password = new FormControl('', Validators.required)

  private readonly finish = new Subject();

  ngOnDestroy(): void {
    this.finish.next()
    this.finish.complete()
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
    this.password.setValue(value, { emitEvent: false })
  }
}
