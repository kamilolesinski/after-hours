import { ExistingProvider, forwardRef, InjectionToken } from '@angular/core';

export class AppProvider {
  static useExisting<T>(component: any, injectionToken: InjectionToken<T>): ExistingProvider {
    return {
      multi: true,
      provide: injectionToken,
      useExisting: forwardRef(() => component)
    };
  }
}