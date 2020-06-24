import { Component, ElementRef, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator, Validators, ValidationErrors } from '@angular/forms'

import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

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
export class PasswordComponent implements ControlValueAccessor, OnDestroy, Validator {
  @Input() readonly label = 'Password'

  @ViewChild('input') private readonly input: ElementRef<HTMLInputElement> | null = null

  password = new FormControl('', Validators.required)
  passwordHidden = true

  private readonly finish = new Subject();

  constructor(private renderer: Renderer2) { }

  ngOnDestroy(): void {
    this.finish.next()
    this.finish.complete()
  }

  changePasswordState(): void {
    if (this.input) {
      this.renderer.setAttribute(this.input.nativeElement, 'type', this.passwordHidden ? 'text' : 'password')
      this.passwordHidden = !this.passwordHidden
    }
  }

  registerOnChange(fn: any): void {
    this.password.valueChanges
      .pipe(takeUntil(this.finish))
      .subscribe(fn)
  }

  registerOnTouched(): void { }

  validate(): ValidationErrors | null {
    return this.password.valid ? null : { valid: false }
  }

  writeValue(value: any): void {
    this.password.reset()
    this.password.setValue(value, { emitEvent: false })
  }
}
