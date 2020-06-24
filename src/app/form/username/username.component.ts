import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator, Validators, ValidationErrors } from '@angular/forms'

import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { createProvider } from '../../utils/utils'

@Component({
  providers: [
    createProvider(UsernameComponent, NG_VALIDATORS),
    createProvider(UsernameComponent, NG_VALUE_ACCESSOR)
  ],
  selector: 'app-username',
  styleUrls: ['./username.component.scss'],
  templateUrl: './username.component.html'
})
export class UsernameComponent implements ControlValueAccessor, OnDestroy, Validator {
  @ViewChild('input') private readonly input: ElementRef<HTMLInputElement> | null = null

  username = new FormControl('', Validators.required)

  private readonly finish = new Subject()

  registerOnChange(fn: any): void {
    this.username.valueChanges
      .pipe(takeUntil(this.finish))
      .subscribe(fn)
  }

  ngOnDestroy(): void {
    this.finish.next()
    this.finish.complete()
  }

  registerOnTouched(): void { }

  validate(): ValidationErrors | null {
    return this.username.valid ? null : { valid: false }
  }

  writeValue(value: any): void {
    this.resetForm()
    this.username.setValue(value, { emitEvent: false })
  }

  private resetForm(): void {
    this.username.reset()
    this.input && this.input.nativeElement.focus()
  }
}
