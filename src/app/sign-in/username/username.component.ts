import { Component, OnInit, forwardRef } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UsernameComponent)
  }]
})
export class UsernameComponent implements ControlValueAccessor, OnInit {
  username = new FormControl()

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.username.valueChanges.subscribe(fn)
  }

  registerOnTouched(): void { }

  writeValue(value: any): void {
    this.username.setValue(value, { emitEvent: false })
  }
}
