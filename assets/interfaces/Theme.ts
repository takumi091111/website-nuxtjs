export interface Themes {
  [key: string]: Theme
  light: Theme
  dark: Theme
}

export interface Theme {
  '--black': string
  '--white': string
  '--gray': string
  '--deep-gray': string
  '--font-color': string
  '--font-hover-color': string
  '--background-color': string
  '--background-hover-color': string
  '--border-color': string
  '--border-hover-color': string
  '--code-block-font-color': string
  '--code-block-background-color': string
}
