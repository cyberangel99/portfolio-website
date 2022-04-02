import { Flex, Box, Text, Heading, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
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
          <Text>Picture goes here</Text>
          <Heading as="h1" size="3xl" color="teal.400" isTruncated>
            Mary Green
          </Heading>
          <Heading>Front-End web Developer</Heading>
          <Text size="md">
            <Icon as={FiMapPin} m={2} color="teal.400" />
            Houston, Texas
          </Text>
          <Text>
            <Icon as={GrGithub} boxSize={8} m={2} color="purple.200" />
            <Icon as={GrLinkedin} boxSize={8} m={2} color="linkedIn.300" />
            <Icon as={GrMail} boxSize={8} m={2} color="teal.300" />
            <Icon as={AiTwotoneFolderOpen} boxSize={8} m={2} color="orange.300" />
          </Text>
        </Box>
      </Flex>
    </Element>
  )
}
