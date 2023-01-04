import styled from 'styled-components'

import { FontSize } from '~/token'

export const LogoSize = {
  Small: FontSize.LogoSmall,
  Large: FontSize.LogoLarge
} as const
type LogoSizeType = typeof LogoSize[keyof typeof LogoSize]

interface Props {
  size?: LogoSizeType
  className?: string
}

export const Logo = ({ size = LogoSize.Small, className }: Props) => {
  return (
    <Container size={size} className={className}>
      Goldfish
    </Container>
  )
}

const Container = styled.div<{ size: LogoSizeType }>`
  font-size: ${({ size }) => size};
  font-weight: bold;
  letter-spacing: 0.1rem;
`
