interface Paths {
  readonly main: 'main',
  readonly signIn: 'sign-in',
  readonly signUp: 'sign-up'
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
