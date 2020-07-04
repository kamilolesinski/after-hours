import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core'
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
import { takeUntil } from 'rxjs/operators'

import { AppProvider } from '../../utils'

@Component({
  providers: [
    AppProvider.create(EmailComponent, NG_VALIDATORS),
    AppProvider.create(EmailComponent, NG_VALUE_ACCESSOR)
  ],
  selector: 'app-email',
  styleUrls: ['./email.component.scss'],
  templateUrl: './email.component.html'
})
export class EmailComponent implements ControlValueAccessor, OnDestroy, Validator {
  @ViewChild('input') private input: ElementRef<HTMLInputElement> | null = null

  email: FormControl

  private finish = new Subject<void>()
  private readonly initValue = ''

  constructor() {
    this.email = new FormControl(
      this.initValue,
      {
        updateOn: 'blur',
        validators: [
          Validators.email,
          Validators.required
        ]
      }
    )
  }

  registerOnChange(fn: any): void {
    this.email.valueChanges
      .pipe(takeUntil(this.finish))
      .subscribe(fn)
  }

  ngOnDestroy(): void {
    this.finish.next()
    this.finish.complete()
  }

  registerOnTouched(): void { }

  validate(): ValidationErrors | null {
    return this.email.valid ? null : { valid: false }
  }

  writeValue(value: any): void {
    this.resetForm()
    this.email.setValue(value, { emitEvent: false })
  }

  private resetForm(): void {
    this.email.reset(this.initValue)
    this.input?.nativeElement.focus()
  }
}
