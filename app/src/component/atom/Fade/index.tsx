import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { createGlobalStyle } from 'styled-components'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  className?: string
}

export const Fade = ({ children, isOpen, className }: Props) => {
  const nodeRef = useRef(null)

  return (
    <CSSTransition nodeRef={nodeRef} in={isOpen} classNames={'fade'} timeout={400} unmountOnExit>
      <div ref={nodeRef} className={className}>
        <FadeStyle />
        {children}
      </div>
    </CSSTransition>
  )
}

const FadeStyle = createGlobalStyle`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: all .2s ease-in-out;
    opacity: 1;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    transition: all .2s ease-in-out;
    opacity: 0;
  }
`
