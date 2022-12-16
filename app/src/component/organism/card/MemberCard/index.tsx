import styled from 'styled-components'

import { BackgroundColor } from '~/token'
import { Card } from '~/component/atom/Card'

interface Props {
  name?: string
  className?: string
}

export const MemberCard = ({ name, className }: Props) => {
  return (
    <Container name={name} className={className}>
      <Content>
        <Photo>ここに写真</Photo>
        <Description>ここに紹介文</Description>
      </Content>
    </Container>
  )
}

const Container = styled(Card)``

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Photo = styled.div`
  flex: 0 0 300px;
  height: 200px;
  background-color: ${BackgroundColor.Img};
`

const Description = styled.div`
  flex: 1;
`
