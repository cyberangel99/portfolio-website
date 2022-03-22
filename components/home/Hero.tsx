import { Flex, Box, Text, Heading, Icon } from '@chakra-ui/react'
import React from 'react'
import { FiMapPin } from 'react-icons/fi'

export default function Hero() {
  return (
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
      </Box>
    </Flex>
  )
}
