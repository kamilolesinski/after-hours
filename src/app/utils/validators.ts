import { AbstractControl, ValidationErrors } from '@angular/forms'

interface MaxLengths {
  readonly domain: 189
  readonly label: 63
  readonly local: 64
}

export class AppValidators {
  private static readonly emailRegExp = /^[\w!#$%&'*+\-/=?^`{|}~]+(\.?[\w!#$%&'*+\-/=?^`{|}~])*@[a-z0-9]+(-*[a-z0-9])*(\.([a-z0-9]+(-*[a-z0-9])*))*\.(?=\d*-*[a-z])[a-z0-9]+(-*[a-z0-9])*\.?$/
  private static maxLengths: MaxLengths = {
    domain: 189,
    label: 63,
    local: 64
  }

  /**
   * Email validation based on RFC 3696 (https://tools.ietf.org/html/rfc3696#section-3)
   * with some exceptions treated as invalid:
   * - use of quotes in a local part,
   * - use of non-ASCII characters in a domain part (to fix in the future?).
   * 
   * Top level domain isn't checked against list of current TLDs published by IANA:
   * https://data.iana.org/TLD/tlds-alpha-by-domain.txt.
   * @param c Form control to validate.
   * @returns Validation error or `null` if email is valid.
   */
  static email(c: AbstractControl): ValidationErrors | null {
    return AppValidators.isEmail(c.value) ? null : { email: 'Email address is invalid' }
  }

  private static checkDomain(domain: string): boolean {
    return this.checkLength(domain, 'domain') && this.proceedDomain(domain)
  }

  private static checkLength(part: string, key: keyof MaxLengths): boolean {
    return part.length <= this.maxLengths[key]
  }

  private static isEmail(email: string): boolean {
    return this.emailRegExp.test(email.toLowerCase()) && this.proceedEmail(email)
  }

  private static proceedDomain(domain: string): boolean {
    return domain
      .split('.')
      .map(e => this.checkLength(e, 'label'))
      .reduce((a, b) => a && b)
  }

  private static proceedEmail(email: string): boolean {
    return email
      .split('@')
      .map((e, i) => (i === 0) ? this.checkLength(e, 'local') : this.checkDomain(e))
      .reduce((a, b) => a && b)
  }
}
