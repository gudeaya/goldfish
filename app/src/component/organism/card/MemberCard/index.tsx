import Image from 'next/image'
import { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

import { BorderColor, TextColor } from '~/token'
import { Card } from '~/component/atom/Card'
import { MemberModalDialog } from '~/component/organism/dialog/MemberModalDialog'

interface Props {
  member: Member
  name?: string
  className?: string
}

export interface Member {
  key: string
  name: string
  nicknames: string[]
  descriptions: string[]
  birthday: string
}

export const MemberCard = ({ member, className }: Props) => {
  const [isOpenModalDialog, setIsOpenModalDialog] = useState(false)

  const name = useMemo(() => {
    const nicknames = member.nicknames.join(', ')
    return `${member.name}（${nicknames}）`
  }, [member])

  const src = useMemo(() => {
    return `/member/${member.key}.jpg`
  }, [member.key])

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
          <Photo>
            <Image
              src={src}
              alt={'beni'}
              width={1200}
              height={1000}
              style={{ width: '100%', height: 'auto', transition: '0.2s' }}
            />
          </Photo>

          <Description>
            {member.descriptions.map((description) => {
              return <p key={description}>{description}</p>
            })}
          </Description>

          <DL>
            <DT>我が家に来た日</DT>
            <DD>{member.birthday}</DD>
          </DL>
        </Content>
      </Container>

      <MemberModalDialog isOpen={isOpenModalDialog} onClose={handleCloseClick} />
    </>
  )
}

const Container = styled(Card)`
  cursor: pointer;

  &:hover img {
    transform: scale(1.2);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`

const Photo = styled.div`
  display: flex;
  border: 2px solid ${BorderColor.Card};
  overflow: hidden;
`

const Description = styled.div`
  flex: 1;
  line-height: 1.4;
`

const DL = styled.dl`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin: 0;
  color: ${TextColor.Definition};
`

const DT = styled.dt`
  flex-shrink: 0;

  &::after {
    content: '：';
  }
`

const DD = styled.dd`
  flex: 1;
  margin: 0;
`
