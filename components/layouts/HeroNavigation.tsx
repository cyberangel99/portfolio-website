import { Box, Link, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'

import React from 'react'

import { MENU_ITEMS } from '../../constants'

function HeroNavigation() {
  return (
    <Box position="relative">
      {MENU_ITEMS.map((item) => (
        <NextLink key={item.name} href={item.url} passHref>
          <Link>
            <Heading>{item.name.toUpperCase()}</Heading>
          </Link>
        </NextLink>
      ))}
    </Box>
  )
}

export default HeroNavigation
