import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Icon,
  Link
} from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr'

export default function Footer() {
  const bg = useColorModeValue('gray.200', 'gray.200')

  return (
    <Box as="footer" alignItems="center" p={6} bg={bg}>
      <Container as={Stack} maxW="container.md">
        <SimpleGrid columns={1} spacing={8}>
          <Stack align="center">
            <Text>
              <Link href="https://github.com/cyberangel99" isExternal>
                <Icon as={GrGithub} boxSize={8} m={2} color="purple.200" />
              </Link>
              <Link href="https://www.linkedin.com/in/mary-green-4295ab149/" isExternal>
                <Icon as={GrLinkedin} boxSize={8} m={2} color="linkedIn.300" />
              </Link>
              <a href="mailto:magreen451@gmail.com">
                <Icon as={GrMail} boxSize={8} m={2} color="teal.300" />
              </a>
              <Link
                href="https://docs.google.com/document/d/1W8TguX53U9jCRtbAb3L_Eco8ow7UPSr4hYTTzOhd5RQ/edit?usp=sharing"
                isExternal
              >
                <Icon as={AiTwotoneFolderOpen} boxSize={8} m={2} color="orange.300" />
              </Link>
              <a href="tel:419-789-1992">
                <Icon as={FiPhoneCall} boxSize={8} color="teal.400" />
              </a>
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.200')}
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>
            © {moment().format('YYYY')} {process.env.NEXT_PUBLIC_WEBSITE_NAME}. All rights reserved
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
