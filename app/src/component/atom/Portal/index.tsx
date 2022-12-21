import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: React.ReactElement
  targetId: string
}

export const Portal = ({ children, targetId }: Props) => {
  const [element, setElement] = useState<Element | null>(null)

  useEffect(() => {
    setElement(document.getElementById(targetId))
  }, [targetId])

  return element && createPortal(children, element)
}
