import { AbstractControl, ValidationErrors } from '@angular/forms'

interface MaxLengths {
  readonly domain: 189
  readonly user: 64
}

export const AppValidators = (function appValidatorsFactory() {
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

  function _checkUser(user: string): boolean {
    return _checkLength(user, 'user') && _userRegExpTest(user)
  }

  function _isEmail(email: string): boolean {
    return _oneAtSignRegExpTest(email) ? _processEmail(email) : false
  }

  function _oneAtSignRegExpTest(email: string): boolean {
    return /^[^@]*@[^@]*$/.test(email)
  }

  function _processEmail(email: string): boolean {
    return email
      .split('@')
      .map((e, i) => (i === 0) ? _checkUser(e) : _checkDomain(e))
      .reduce((a, b) => a && b)
  }

  function _userRegExpTest(user: string): boolean {
    return /^[\w!#$%&'*+\-/=?^`{|}~]+(\.?[\w!#$%&'*+\-/=?^`{|}~])*$/.test(user)
  }

  return { email: emailValidator }
})()
