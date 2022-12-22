import { useMemo } from 'react'
import styled from 'styled-components'

import { MemberCard, Member } from '~/component/organism/card/MemberCard'

interface Props {
  className?: string
}

export const MemberList = ({ className }: Props) => {
  const members = useMemo<Member[]>(() => {
    return [
      {
        name: 'つの',
        nicknames: ['つのの', 'ダイソン'],
        descriptions: ['一番大きくて、ご飯をダイソンのように吸い尽くす笑', '尾鰭に小さいツノのような出っ張りがある'],
        birthday: '2021年06月25日'
      },
      {
        name: 'はく',
        nicknames: ['はくた', '美人さん'],
        descriptions: ['ブクブクの泡を食べるのが大好きで、いつもモグモグしてる', '顔が美形で目が綺麗。とにかく美しい'],
        birthday: '2021年06月25日'
      },
      {
        name: 'べに',
        nicknames: ['べにに', 'ぷりり'],
        descriptions: ['泳ぎが下手で、いつも全身を使ってぷりぷり泳ぐ', 'みんなにちょっかいをだすヤンチャっ子'],
        birthday: '2021年06月25日'
      },
      {
        name: 'かま',
        nicknames: ['かまたん', 'ねぼすけ'],
        descriptions: [
          '一番よく寝る。端っこでウトウトするのが好き',
          '片方のカマが飛び抜けて濃い色をしており、一番真っ赤で華やか'
        ],
        birthday: '2022年06月26日'
      },
      {
        name: 'まる',
        nicknames: ['まるたん', 'ひげちゃん'],
        descriptions: ['一番スタイルが良く、フォルムが丸い', '口の周りが赤いので、夫に「髭生えとる笑」と揶揄われる'],
        birthday: '2022年06月26日'
      },
      {
        name: 'ませ',
        nicknames: ['ませたん', 'ませらー'],
        descriptions: [
          '名前の由来は「尾鰭がマセラティのエンブレムに似てる」と夫が言ったため笑',
          '黒子の時は一番小さかったが、今は他の子と同じくらいに成長'
        ],
        birthday: '2022年06月26日'
      }
    ]
  }, [])

  return (
    <Container className={className}>
      {members.map((member) => {
        return <MemberCard key={member.name} member={member} />
      })}
    </Container>
  )
}

const Container = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
