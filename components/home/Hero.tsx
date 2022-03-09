import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function Hero() {
  return (
    <Flex
      h={{ sm: 'full', md: '100vh' }}
      alignItems="center"
      justifyContent="center"
      p={4}
      background="linear-gradient(rgba(10, 10, 10,0.4),rgba(10, 10, 10,0.4)),
        url(/images/hero-space.png) no-repeat center center / cover"
    />
  )
}
