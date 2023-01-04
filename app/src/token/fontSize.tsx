// primitive
type PrimitiveValue = typeof Size[keyof typeof Size]

const Size = {
  XL: '4rem',
  L: '2rem',
  M: '1.3rem',
  S: '1.1rem'
} as const satisfies {
  [key: string]: string
}

// semantic
export const FontSize = {
  Body: Size.M,
  LogoSmall: Size.M,
  LogoLarge: Size.XL
} as const satisfies {
  [key: string]: PrimitiveValue
}
