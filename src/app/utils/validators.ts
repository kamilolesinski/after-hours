import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

interface MaxLengths {
  readonly domain: 189
  readonly label: 63
  readonly user: 64
}

export const AppValidators = ((): { email: ValidatorFn } => {
  function emailValidator(c: AbstractControl): ValidationErrors | null {
    return _isEmail(c.value) ? null : { email: 'Email address is invalid' }
  }

  function _checkDomain(domain: string): boolean {
    return _checkLength(domain, 'domain') && _proceedDomain(domain)
  }

  function _checkLength(part: string, key: keyof MaxLengths): boolean {
    const maxLengths: MaxLengths = {
      domain: 189,
      label: 63,
      user: 64
    }
    return part.length <= maxLengths[key]
  }

  function _emailRegExpTest(email: string): boolean {
    const emailRegExp = /^[\w!#$%&'*+\-/=?^`{|}~]+(\.?[\w!#$%&'*+\-/=?^`{|}~])*@[a-z0-9]+(-*[a-z0-9])*(\.([a-z0-9]+(-*[a-z0-9])*))*\.(?=\d*-*[a-z])[a-z0-9]+(-*[a-z0-9])*\.?$/
    return emailRegExp.test(email)
  }

  function _isEmail(email: string): boolean {
    return _emailRegExpTest(email.toLowerCase()) && _proceedEmail(email)
  }

  function _proceedDomain(domain: string): boolean {
    return domain
      .split('.')
      .map(e => _checkLength(e, 'label'))
      .reduce((a, b) => a && b)
  }

  function _proceedEmail(email: string): boolean {
    return email
      .split('@')
      .map((e, i) => (i === 0) ? _checkLength(e, 'user') : _checkDomain(e))
      .reduce((a, b) => a && b)
  }

  return { email: emailValidator }
})()
