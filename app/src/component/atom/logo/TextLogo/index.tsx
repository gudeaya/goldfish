import styled from 'styled-components'

import { FontSize } from '~/token'

export const Size = {
  Small: FontSize.LogoSmall,
  Large: FontSize.LogoLarge
} as const
type SizeType = typeof Size[keyof typeof Size]

interface Props {
  size?: SizeType
  className?: string
}

export const TextLogo = ({ size = Size.Small, className }: Props) => {
  return (
    <Container size={size} className={className}>
      Goldfish
    </Container>
  )
}

const Container = styled.div<{ size: SizeType }>`
  font-size: ${({ size }) => size};
  font-weight: bold;
  letter-spacing: 0.1rem;
`
