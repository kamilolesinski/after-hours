import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core'
import {
  AbstractControlOptions,
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

import { AppValidators, createProvider } from '../../utils'

@Component({
  providers: [
    createProvider(EmailComponent, NG_VALIDATORS),
    createProvider(EmailComponent, NG_VALUE_ACCESSOR)
  ],
  selector: 'app-email',
  styleUrls: ['./email.component.scss'],
  templateUrl: './email.component.html'
})
export class EmailComponent implements ControlValueAccessor, OnDestroy, Validator {
  @ViewChild('input') private readonly input: ElementRef<HTMLInputElement> | null = null

  readonly email: FormControl

  private readonly controlOptions: Readonly<AbstractControlOptions> = {
    updateOn: 'blur',
    validators: [Validators.required, AppValidators.email]
  }
  private readonly finish = new Subject()

  constructor() {
    this.email = new FormControl('', this.controlOptions)
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
    this.email.reset('')
    this.input?.nativeElement.focus()
  }
}
