// primitive
type PrimitiveValue = typeof Gray[keyof typeof Gray] | typeof Orange[keyof typeof Orange] | typeof Blue[keyof typeof Blue]

const Gray = {
  1000: '#222',
  800: '#333',
  600: '#444',
  400: '#ccc',
  200: '#f7f7f7',
} as const satisfies {
  [key: number]: string
}

const Orange = {
  1000: '#502c10',
  800: '#a35310',
  600: '#fd7e00',
  400: '#ffa965',
  200: '#ffd4b1'
} as const satisfies {
  [key: number]: string
}

const Blue = {
  600: '#82b2d7',
  200: '#cadbe9'
} as const satisfies {
  [key: number]: string
}

// semantic
export const TextColor = {
  Body: Gray[800],
  Header: Orange[1000],
  Footer: Gray[200],
  Link: Orange[600],
  LinkFooter: Orange[200],
  Definition: Orange[800],
} as const satisfies {
  [key: string]: PrimitiveValue
}

export const BackgroundColor = {
  Body: Gray[200],
  Header: Orange[600],
  Footer: Gray[600],
  Img: Gray[400],
  Card: Blue[200]
} as const satisfies {
  [key: string]: PrimitiveValue
}
