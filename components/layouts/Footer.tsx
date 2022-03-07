import { Box, Container, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'

import SocialMediaIcons from '../shared/SocialMediaIcons'

export default function Footer() {
  const bg = useColorModeValue('gray.200', 'gray.800')

  return (
    <Box as="footer" alignItems="center" p={6} bg={bg}>
      <Container as={Stack} maxW="container.lg" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Company
            </Text>
            <Link href="#">About Us</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact Us</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Support
            </Text>
            <Link href="#">Help Center</Link>
            <Link href="#">Safety Center</Link>
            <Link href="#">Community Guidelines</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Legal
            </Text>
            <Link href="#">Cookies Policy</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Law Enforcement</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>
            © {moment().format('YYYY')} {process.env.NEXT_PUBLIC_WEBSITE_NAME}. All rights reserved
          </Text>
          <SocialMediaIcons />
        </Container>
      </Box>
    </Box>
  )
}
