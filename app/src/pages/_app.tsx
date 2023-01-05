import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'

import { BackgroundColor, FontSize, TextColor } from '~/token'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    color: ${TextColor.Body};
    background-color: ${BackgroundColor.Body};
    font-size: ${FontSize.Body};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1;
    overscroll-behavior: none;

    &::-webkit-scrollbar {  
      display: none;
    }
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: ${TextColor.Link};
    text-decoration: none;
    transition: 0.2s;
  }
`
