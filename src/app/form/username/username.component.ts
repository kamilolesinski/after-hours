import { Component, forwardRef } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UsernameComponent)
  }],
  selector: 'app-username',
  styleUrls: ['./username.component.scss'],
  templateUrl: './username.component.html'
})
export class UsernameComponent implements ControlValueAccessor {
  username = new FormControl()

  registerOnChange(fn: any): void {
    this.username.valueChanges.subscribe(fn)
  }

  registerOnTouched(): void { }

  writeValue(value: any): void {
    this.username.setValue(value, { emitEvent: false })
  }
}
