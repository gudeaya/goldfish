import Head from 'next/head'
import { FaGithub } from 'react-icons/fa'
import styled from 'styled-components'

import { BackgroundColor, TextColor } from '~/token'
import { Logo, LogoSize } from '~/component/atom/Logo'
import { MemberList } from '~/component/organism/list/MemberList'
import { MODAL_DIALOG_LAYER_ID } from '~/constant'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Goldfish</title>
        <meta name={'viewport'} content={'width=device-width,initial-scale=1.0'} />
        <meta name={'description'} content={'我が家の金魚を紹介するだけのサイト'} />
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>

      <Header>
        <h1>
          <Logo />
        </h1>
      </Header>

      <main>
        <FirstViewContent>
          <Title>
            <Logo size={LogoSize.Large} />
            <p>我が家の金魚を紹介するだけのサイト</p>
          </Title>
        </FirstViewContent>

        <Content>
          <MemberList />
        </Content>
      </main>

      <Footer>
        <FooterInfo>
          <FooterLink href={'https://github.com/gudeaya/goldfish'} target={'_blank'}>
            <FaGithub size={20} />
            <span>GitHub</span>
          </FooterLink>
        </FooterInfo>

        <small>&copy; 2022 Goldfish</small>
      </Footer>

      <ModalDialogLayer id={MODAL_DIALOG_LAYER_ID} />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  color: ${TextColor.Header};
  background-color: ${BackgroundColor.Header};
  z-index: 1000;
`

const Content = styled.article`
  padding: 0 10%;
`

const FirstViewContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(45deg, ${BackgroundColor.FirstViewLeft} 0%, ${BackgroundColor.FirstViewRight} 100%);
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  line-height: 1.3;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 10px;
  gap: 20px;
  color: ${TextColor.Footer};
  background-color: ${BackgroundColor.Footer};
  z-index: 1000;
`

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${TextColor.LinkFooter};

  &:hover {
    text-decoration: underline;
  }
`

const ModalDialogLayer = styled.aside`
  position: fixed;
  z-index: 10000;
`
