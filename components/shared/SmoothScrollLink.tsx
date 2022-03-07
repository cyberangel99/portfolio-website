import React, { ReactNode } from 'react'
import { Link as ScrollLink } from 'react-scroll'

import { usePageOffset } from '../../hooks/ui'

type Props = {
  children: ReactNode
  to: string
  duration?: number
  scrollOffset?: number
}

export default function SmoothScrollLink({ children, to, duration = 700, scrollOffset }: Props) {
  const { offset } = usePageOffset()
  return (
    <ScrollLink to={to} spy smooth duration={duration} offset={scrollOffset || offset}>
      {children}
    </ScrollLink>
  )
}
