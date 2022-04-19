import { Flex, Box, Text, Heading, Icon, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr'
import { Element } from 'react-scroll'

import { HASH_ROUTES } from '../../constants'

export default function Hero() {
  return (
    <Element name={HASH_ROUTES.HOME}>
      <Flex
        h={{ sm: 'full', md: '100vh' }}
        alignItems="center"
        justifyContent="center"
        p={4}
        background="linear-gradient(rgba(10, 10, 10,0.2),rgba(10, 10, 10,0.2)),
        url(/images/hero-space.png) no-repeat center center / cover"
        color="gray.50"
      >
        <Box justifyContent="center" alignItems="center" textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="./images/mary-image.png"
            alt="Mary Green"
            display="inline-block"
          />
          <Heading as="h1" size="3xl" color="teal.400" isTruncated>
            Mary Green
          </Heading>
          <Heading>Front-End web Developer</Heading>
          <Text size="md">
            <Icon as={FiMapPin} m={2} color="teal.400" />
            Houston, Texas
          </Text>
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
        </Box>
      </Flex>
    </Element>
  )
}
