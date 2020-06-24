import { Component, Input } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator, Validators, ValidationErrors } from '@angular/forms'

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
export class PasswordComponent implements ControlValueAccessor, Validator {
  @Input() readonly label = 'Password'

  password = new FormControl('', Validators.required)

  registerOnChange(fn: any): void {
    this.password.valueChanges.subscribe(fn)
  }

  registerOnTouched(): void { }

  validate(): ValidationErrors | null {
    return this.password.valid ? null : { valid: false }
  }

  writeValue(value: any): void {
    this.password.setValue(value, { emitEvent: false })
  }
}
