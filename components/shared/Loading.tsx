import { Flex, Heading, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function Loading({
  message = '',
  height = 'auto'
}: {
  message?: string
  height?: string
}) {
  return (
    <Flex height={height} alignItems="center" justifyContent="center" direction="column">
      {message && (
        <Heading as="h2" size="md" mb={6}>
          {message}
        </Heading>
      )}
      <Spinner thickness="4px" speed="0.50s" emptyColor="gray.200" color="primary.500" size="xl" />
    </Flex>
  )
}
