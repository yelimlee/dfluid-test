import { colors, Colors } from '@/styles/colorPalette'
import { typographyMap, Typography } from '@/styles/typography'
import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontFamily?: CSSProperties['fontFamily']
  bold?: boolean
}

const Text = styled.span<TextProps>(
  ({ color = 'black', display, textAlign, fontFamily, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 700 : 400,
    fontFamily: `"${fontFamily}", sans-serif`,
  }),
  ({ typography = 't1' }) => typographyMap[typography],
)

export default Text
