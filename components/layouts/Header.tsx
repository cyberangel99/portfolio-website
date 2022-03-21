import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  useColorModeValue,
  useDisclosure,
  Heading
} from '@chakra-ui/react'

import { motion, useViewportScroll } from 'framer-motion'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'

import ColorModeButton from '../shared/ColorModeButton'
import Logo from '../shared/Logo'
import MobileMenuButton from '../shared/MobileMenuButton'
import PreviewBar from '../shared/PreviewBar'

import MobileNavigationMenu from './MobileNavigationMenu'

import NavigationMenu from './NavigationMenu'

const MotionFlex = motion(Flex)

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { scrollY } = useViewportScroll()
  const [position, setPosition] = useState(scrollY.get())
  const navBg = useColorModeValue('gray.50', 'gray.800')
  const isSticky = position > 50
  useEffect(() => {
    setPosition(scrollY.get())
    scrollY.onChange((pos: number) => {
      setPosition(pos)
    })
  }, [scrollY, position])

  return (
    <>
      <MotionFlex
        as="header"
        w="100%"
        pos="fixed"
        top={0}
        flexDir="column"
        boxShadow={isSticky ? 'md' : 'none'}
        borderBottom="none"
        layout={false}
        bg={isSticky ? navBg : 'transparent'}
        zIndex={999}
        initial={{ opacity: 0, y: -70 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.3 }
        }}
      >
        <Container maxW="100%" p={0}>
          <PreviewBar />
          <SimpleGrid columns={{ base: 2 }} spacing={8} py={3} px={4}>
            <Flex justifyContent="start" alignItems="center">
              <Link href="/" passHref>
                <a>
                  <Logo height={isSticky ? '35px' : '50px'} />
                </a>
              </Link>
              <Heading as="h3" size="lg">
                Mary Green's portfolio
              </Heading>
            </Flex>

            <Flex alignItems="center" justifyContent="end">
              <HStack>
                <Box display={{ base: 'none', lg: 'block' }}>
                  <NavigationMenu />
                </Box>
                <ColorModeButton />
                <MobileMenuButton onOpen={onOpen} />
              </HStack>
            </Flex>
          </SimpleGrid>
        </Container>
        <Box display={{ base: 'block', lg: 'none' }}>
          <MobileNavigationMenu isOpen={isOpen} onClose={onClose} />
        </Box>
      </MotionFlex>
    </>
  )
}
