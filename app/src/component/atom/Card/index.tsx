import styled from 'styled-components'

import { BorderColor } from '~/token'

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
  border: 1px solid ${BorderColor.Card};
  border-radius: 4px;
  gap: 20px;
`

const Name = styled.h1`
  padding-left: 4px;
  border-left: 4px solid ${BorderColor.Card};
  font-weight: bold;
  line-height: 1.3;
`
