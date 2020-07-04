import { forwardRef, InjectionToken, Provider } from '@angular/core';

export function createProvider<T>(component: any, token: InjectionToken<T>): Provider {
  return {
    multi: true,
    provide: token,
    useExisting: forwardRef((): typeof component => component)
  };
}

export class AppProvider {
  static create<T>(component: any, token: InjectionToken<T>): Provider {
    return {
      multi: true,
      provide: token,
      useExisting: forwardRef((): typeof component => component)
    };
  }
}