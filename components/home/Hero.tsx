import {
  Flex,
  Container,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Box,
  SimpleGrid,
  Badge
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Element } from 'react-scroll'

import { HASH_ROUTES } from '../../constants'
import SmoothScrollLink from '../shared/SmoothScrollLink'

export default function Hero() {
  const AnimatedHeroBox = motion(Flex)
  const MotionTitle = motion(Heading)
  const MotionSubtitle = motion(Heading)

  return (
    <Element name={HASH_ROUTES.HOME}>
      <Box
        minH="auto"
        h="100vh"
        bg="url(/images/hero.png) no-repeat center center / cover"
        _before={{
          content: '""',
          h: '100vh',
          w: 'full',
          pos: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.9,
          bg: useColorModeValue('gray.100', 'gray.800')
        }}
        pos="relative"
        overflow="hidden"
        zIndex="1"
        pt={{ base: '25%', md: '0%' }}
      >
        <Container maxWidth="container.md" pos="relative" p={8} h="full">
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4} h="full">
            <AnimatedHeroBox
              initial={{ opacity: 0, y: -15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 }
              }}
              justifyContent="center"
              alignItems="center"
              direction="column"
              textAlign="center"
            >
              <MotionSubtitle
                as="h2"
                size="md"
                mb={2}
                initial={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.5 }
                }}
              >
                <div>
                  <Badge colorScheme="primary" fontSize="0.7em" mb={2} borderRadius={5} p={1}>
                    FREELANCER
                  </Badge>
                </div>
                <div>WEB DEVELOPMENT SERVICES</div>
              </MotionSubtitle>
              <MotionTitle
                as="h1"
                size="2xl"
                mb={8}
                initial={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.5 }
                }}
              >
                Lorem ipsum dolor sit amet,{' '}
                <Text variant="highlight">consectetur adipiscing elit</Text>
              </MotionTitle>

              <div>
                <SmoothScrollLink to={HASH_ROUTES.ABOUT}>
                  <Button
                    colorScheme="primary"
                    variant="solid"
                    size="lg"
                    leftIcon={<FiChevronDown />}
                  >
                    LEARN MORE
                  </Button>
                </SmoothScrollLink>
                <SmoothScrollLink to={HASH_ROUTES.ABOUT}>
                  <Button
                    colorScheme="accent"
                    variant="solid"
                    size="lg"
                    mx={2}
                    leftIcon={<FiChevronDown />}
                  >
                    SIGN UP
                  </Button>
                </SmoothScrollLink>
              </div>
            </AnimatedHeroBox>
          </SimpleGrid>
        </Container>
      </Box>
    </Element>
  )
}
