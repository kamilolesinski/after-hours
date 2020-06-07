import { Component, forwardRef, Input } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordComponent)
  }],
  selector: 'app-password',
  styleUrls: ['./password.component.scss'],
  templateUrl: './password.component.html'
})
export class PasswordComponent implements ControlValueAccessor {
  @Input() readonly label = 'Password';
  
  password = new FormControl()

  registerOnChange(fn: any): void {
    this.password.valueChanges.subscribe(fn)
  }

  registerOnTouched(): void { }

  writeValue(value: any): void {
    this.password.setValue(value, { emitEvent: false })
  }
}
