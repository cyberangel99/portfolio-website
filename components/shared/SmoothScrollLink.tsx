import React, { ReactNode } from 'react'
import { Link as ScrollLink } from 'react-scroll'

type Props = {
  children: ReactNode
  to: string
  duration?: number
  scrollOffset?: number
}

export default function SmoothScrollLink({ children, to, duration = 700, scrollOffset }: Props) {
  return (
    <ScrollLink to={to} spy smooth duration={duration} offset={scrollOffset || 0}>
      {children}
    </ScrollLink>
  )
}
