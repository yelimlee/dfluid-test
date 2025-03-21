import { css } from '@emotion/react'

export const typographyMap = {
  t1: css`
    font-size: 48px;
    line-height: 1.5;
    letter-spacing: calc(48px * -0.015);
  `,
  t2: css`
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: calc(48px * -0.015);
  `,
  t3: css`
    font-size: 18px;
    line-height: 30px;
    letter-spacing: calc(18px * -0.015);
  `,
  t4: css`
    font-size: 16px;
    line-height: 1;
    letter-spacing: calc(16px * -0.015);
  `,
  t5: css`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: calc(14px * -0.015);
  `,
  t6: css`
    font-size: 14px;
    line-height: 14px;
    letter-spacing: calc(14px * -0.015);
  `,
}

export type Typography = keyof typeof typographyMap
