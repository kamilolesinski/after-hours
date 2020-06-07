import { Component, OnInit, forwardRef } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordComponent)
  }]
})
export class PasswordComponent implements ControlValueAccessor, OnInit {
  password = new FormControl()

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.password.valueChanges.subscribe(fn)
  }

  registerOnTouched(): void { }

  writeValue(value: any): void {
    this.password.setValue(value, { emitEvent: false })
  }
}
