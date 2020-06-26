import { AbstractControl, ValidationErrors } from '@angular/forms'

interface MaxLengths {
  readonly domain: 189
  readonly user: 64
}

export const AppValidators = (function appValidatorsFactory() {
  const _atSign = /@/g

  function emailValidator(c: AbstractControl): ValidationErrors | null {
    const email = c.value
    const error: Readonly<ValidationErrors> = {
      email: { value: email }
    }
    return _isEmail(email) ? null : error
  }

  function _checkDomain(domain: string): boolean {
    return _checkLength(domain, 'domain') && _checkPeriod(domain)
  }

  function _checkLength(part: string, key: keyof MaxLengths): boolean {
    const maxLengths: MaxLengths = {
      domain: 189,
      user: 64
    }
    return part.length <= maxLengths[key]
  }

  function _checkPeriod(domain: string): boolean {
    const period = '.'
    if (!domain.includes(period)) {
      return false
    }
    if (domain.startsWith(period) || domain.endsWith(period)) {
      return false
    }
    return true
  }

  function _hasOneAtSign(email: string): boolean {
    const atSigns = email.match(_atSign)
    return atSigns ? atSigns.length === 1 : false
  }

  function _isEmail(email: string): boolean {
    if (!_hasOneAtSign(email)) {
      return false
    }
    return email
      .split(_atSign)
      .map((e, i) => (i === 0) ? _checkLength(e, 'user') : _checkDomain(e))
      .reduce((a, b) => a && b)
  }

  return { email: emailValidator }
})()
