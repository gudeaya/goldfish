// primitive
const Size = {
  XL: '4rem',
  L: '2rem',
  M: '1.3rem',
  S: '1.1rem'
} as const

// semantic
export const FontSize = {
  Body: Size.M,
  LogoSmall: Size.M,
  LogoLarge: Size.XL
} as const
