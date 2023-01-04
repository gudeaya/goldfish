import styled from 'styled-components'

import { BackgroundColor } from '~/token'

interface Props {
  children: React.ReactNode
  name?: string
  className?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const Card = ({ children, name, className, onClick }: Props) => {
  return (
    <Container className={className} onClick={onClick}>
      {name && <Name>{name}</Name>}
      {children}
    </Container>
  )
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${BackgroundColor.Card};
  border-radius: 4px;
  gap: 20px;
`

const Name = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  line-height: 1.3;
`
