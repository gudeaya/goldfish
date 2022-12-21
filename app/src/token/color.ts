// primitive
const Gray = {
  1000: '#222',
  800: '#333',
  600: '#444',
  400: '#ccc',
  200: '#f7f7f7'
} as const

// semantic
export const TextColor = {
  Body: Gray[800],
  Header: Gray[200],
  Footer: Gray[200],
  Link: Gray[600],
} as const

export const BackgroundColor = {
  Body: Gray[200],
  Header: Gray[600],
  Footer: Gray[600],
  Img: Gray[400]
} as const

export const BorderColor = {
  Card: Gray[400]
} as const
