import { Container, Stack, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'

export default function CTA() {
  return (
    <Container maxW="container.lg">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          Lorem ipsum dolor{' '}
          <Text as="span" color="primary.400">
            sit amet
          </Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          Libero id faucibus nisl tincidunt. Bibendum neque egestas congue quisque egestas diam.
          Felis eget nunc lobortis mattis aliquam faucibus purus.
        </Text>
        <Stack spacing={6} direction="row">
          <Button px={6} colorScheme="primary" bg="primary.400" _hover={{ bg: 'primary.500' }}>
            Get started
          </Button>
          <Button px={6}>Learn more</Button>
        </Stack>
      </Stack>
    </Container>
  )
}
