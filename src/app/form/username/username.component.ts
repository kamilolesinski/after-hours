import { Component } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator, Validators, ValidationErrors } from '@angular/forms'

import { createProvider } from '../../utils/utils'

@Component({
  providers: [
    createProvider<ControlValueAccessor>(UsernameComponent, NG_VALUE_ACCESSOR),
    createProvider<Validator>(UsernameComponent, NG_VALIDATORS)
  ],
  selector: 'app-username',
  styleUrls: ['./username.component.scss'],
  templateUrl: './username.component.html'
})
export class UsernameComponent implements ControlValueAccessor, Validator {
  username = new FormControl('', Validators.required)

  registerOnChange(fn: any): void {
    this.username.valueChanges.subscribe(fn)
  }

  registerOnTouched(): void { }

  validate(): ValidationErrors | null {
    return this.username.valid ? null : { valid: false }
  }

  writeValue(value: any): void {
    this.username.setValue(value, { emitEvent: false })
  }
}
