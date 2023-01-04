import Head from 'next/head'
import { FaGithub } from 'react-icons/fa'

// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styled from 'styled-components'

import { BackgroundColor, TextColor } from '~/token'
import { Logo, LogoSize } from '~/component/atom/Logo'
import { MemberList } from '~/component/organism/list/MemberList'
import { MODAL_DIALOG_LAYER_ID } from '~/constant'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Head>
        <title>goldfish</title>
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

        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find in-depth information about Next.js features and&nbsp;API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
          </a>
        </div> */}
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
