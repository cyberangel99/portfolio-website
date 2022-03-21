import { Flex } from '@chakra-ui/react'
import React from 'react'

import HeroNavigation from '../layouts/HeroNavigation'

export default function Hero() {
  return (
    <Flex
      h={{ sm: 'full', md: '100vh' }}
      alignItems="center"
      justifyContent="center"
      p={4}
      pos="relative"
      background="linear-gradient(rgba(10, 10, 10,0.2),rgba(10, 10, 10,0.2)),
        url(/images/hero-space.png) no-repeat center center / cover"
    >
      <Flex>
        <HeroNavigation />
      </Flex>
    </Flex>
  )
}
