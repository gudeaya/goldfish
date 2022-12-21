import { useCallback, useState } from 'react'
import styled from 'styled-components'

import { BackgroundColor } from '~/token'
import { Card } from '~/component/atom/Card'
import { MemberModalDialog } from '~/component/organism/dialog/MemberModalDialog'

interface Props {
  name?: string
  className?: string
}

export const MemberCard = ({ name, className }: Props) => {
  const [isOpenModalDialog, setIsOpenModalDialog] = useState(false)

  const handleContainerClick = useCallback(() => {
    setIsOpenModalDialog(true)
  }, [])

  const handleCloseClick = useCallback(() => {
    setIsOpenModalDialog(false)
  }, [])

  return (
    <>
      <Container name={name} className={className} onClick={handleContainerClick}>
        <Content>
          <Photo>ここに写真</Photo>
          <Description>ここに紹介文</Description>
        </Content>
      </Container>

      <MemberModalDialog isOpen={isOpenModalDialog} onClose={handleCloseClick} />
    </>
  )
}

const Container = styled(Card)`
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

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
