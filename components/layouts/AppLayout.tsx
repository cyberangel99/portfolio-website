import { Box, Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Element } from 'react-scroll'

import BackToTop from '../shared/BackToTop'

import Footer from './Footer'
import Header from './Header'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Flex direction="row">
      <Element name="top" />
      <Box
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.1 }
        }}
        h="100vh"
        w="full"
      >
        <Header />
        <Box>{children}</Box>
        <Footer />
        <BackToTop />
      </Box>
    </Flex>
  )
}
