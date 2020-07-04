import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

interface MaxLengths {
  readonly domain: 189
  readonly label: 63
  readonly local: 64
}

export const AppValidators = ((): { email: ValidatorFn } => {
  /**
   * Email validation based on RFC 3696 (https://tools.ietf.org/html/rfc3696#section-3)
   * with some exceptions treated as invalid:
   * - use of quotes in local part,
   * - use of non-ASCII characters in domain part (to fix in the future?).
   * 
   * Top level domain isn't check against list of current TLDs published by IANA:
   * https://data.iana.org/TLD/tlds-alpha-by-domain.txt.
   * @param c Form control to validate.
   * @returns Validation error or `null` if email is valid.
   */
  function email(c: AbstractControl): ValidationErrors | null {
    return _isEmail(c.value) ? null : { email: 'Email address is invalid' }
  }

  function _checkDomain(domain: string): boolean {
    return _checkLength(domain, 'domain') && _proceedDomain(domain)
  }

  function _checkLength(part: string, key: keyof MaxLengths): boolean {
    const maxLengths: MaxLengths = {
      domain: 189,
      label: 63,
      local: 64
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
      .map((e, i) => (i === 0) ? _checkLength(e, 'local') : _checkDomain(e))
      .reduce((a, b) => a && b)
  }

  return { email }
})()
