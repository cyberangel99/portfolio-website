import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import Logo from '../components/shared/Logo'
import SocialMediaIcons from '../components/shared/SocialMediaIcons'

export default function ComingSoon() {
  return (
    <Flex justifyContent="center" alignItems="center" p={8} direction="column" h="100vh">
      <Container centerContent maxW="container.lg" textAlign="center">
        <Logo height="200px" />
        <Heading as="h1" size="2xl" my={8}>
          COMING SOON!
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <SocialMediaIcons />
        <Box my={5}>
          <Text fontSize="smaller">{process.env.NEXT_PUBLIC_WEBSITE_NAME}</Text>
        </Box>
      </Container>
    </Flex>
  )
}
