import styled from 'styled-components'

import { MemberCard } from '~/component/organism/card/MemberCard'

interface Props {
  className?: string
}

export const MemberList = ({ className }: Props) => {
  return (
    <Container className={className}>
      <MemberCard name={'name 1'} />
      <MemberCard name={'name 2'} />
      <MemberCard name={'name 3'} />
      <MemberCard name={'name 4'} />
    </Container>
  )
}

const Container = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
