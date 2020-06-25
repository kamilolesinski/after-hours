import { ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return control => {
    const error: Readonly<ValidationErrors> = {
      email: { value: control.value }
    }
    return control.value.includes('@') ? null : error
  }
}
