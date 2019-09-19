import { Themes } from '~/assets/interfaces/Theme'

export default {
  light: {
    '--black': '#252627',
    '--white': '#f4f4e8',
    '--gray': '#ede6d5',
    '--deep-gray': '#6a6262',
    '--font-color': 'var(--black)',
    '--font-hover-color': 'var(--white)',
    '--background-color': 'var(--white)',
    '--background-hover-color': 'var(--black)',
    '--border-color': 'var(--gray)',
    '--border-hover-color': 'var(--black)',
    '--code-block-font-color': '#ebdbb2',
    '--code-block-background-color': '#282828'
  },
  dark: {
    '--black': '#252627',
    '--white': '#ede6d5',
    '--gray': '#393d3f',
    '--deep-gray': '#6a6262',
    '--font-color': 'var(--white)',
    '--font-hover-color': 'var(--black)',
    '--background-color': 'var(--black)',
    '--background-hover-color': 'var(--white)',
    '--border-color': 'var(--gray)',
    '--border-hover-color': 'var(--white)',
    '--code-block-font-color': '#ebdbb2',
    '--code-block-background-color': '#1d2021'
  }
} as Themes
