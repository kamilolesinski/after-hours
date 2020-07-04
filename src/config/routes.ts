interface Paths {
  main: 'main',
  signIn: 'sign-in',
  signUp: 'sign-up'
}

export const paths: Paths = {
  main: 'main',
  signIn: 'sign-in',
  signUp: 'sign-up'
}

export const links: Readonly<Record<keyof Paths, string>> = {
  main: `/${paths.main}`,
  signIn: `/${paths.signIn}`,
  signUp: `/${paths.signUp}`
}

export class AppRoutes {
  static readonly paths: Paths = {
    main: 'main',
    signIn: 'sign-in',
    signUp: 'sign-up'
  }
  static readonly links: Readonly<Record<keyof Paths, string>> = {
    main: `/${AppRoutes.paths.main}`,
    signIn: `/${AppRoutes.paths.signIn}`,
    signUp: `/${AppRoutes.paths.signUp}`
  }
}
