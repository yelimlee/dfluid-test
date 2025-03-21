import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
    --black: #000000;
    --blue: #18a0fb;
    --white: #ffffff;
    --lightgray: rgba(217, 217, 217, 0.5);
    --gray: #999999;
    --error: #ff6633;
    --success: #00c300;
  }
`

export const colors = {
  black: 'var(--black)',
  blue: 'var(--blue)',
  white: 'var(--white)',
  lightgray: 'var(--lightgray)',
  gray: 'var(--gray)',
  error: 'var(--error)',
  success: 'var(--success)',
}

export type Colors = keyof typeof colors
