import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  inView?: any
  initial?: any
}

export default function WhileInView({
  children,
  inView = { opacity: 1, transition: { duration: 1 } },
  initial = { opacity: 0 }
}: Props) {
  return (
    <motion.div whileInView={inView} initial={initial}>
      {children}
    </motion.div>
  )
}
