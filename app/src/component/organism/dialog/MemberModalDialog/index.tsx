import Image from 'next/image'
import styled from 'styled-components'

import { BackgroundColor } from '~/token'
import { Fade } from '~/component/atom/Fade'
import { ModalDialogPortal } from '~/component/molecule/portal/ModalDialogPortal'

interface Props {
  isOpen: boolean
  className?: string
  onClose: () => void
}

export const MemberModalDialog = ({ isOpen, className, onClose }: Props) => {
  return (
    <ModalDialogPortal>
      <Fade isOpen={isOpen}>
        <Container className={className}>
          <Mask onClick={onClose} />
          <Content>
            <Image
              src={'/member/sample.jpg'}
              alt={'sample'}
              width={1200}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
            />
          </Content>
        </Container>
      </Fade>
    </ModalDialogPortal>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Mask = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: -1;
`

const Content = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  padding: 20px;
  background-color: ${BackgroundColor.Body};
  border-radius: 2px;
`

const Img = styled.div`
  max-width: 100%;
  width: auto;
  padding: 20px;
  background-color: ${BackgroundColor.Img};
  border-radius: 2px;
`
