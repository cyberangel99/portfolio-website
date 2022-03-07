import { Box, Stack, useColorModeValue, Flex, Avatar, Text } from '@chakra-ui/react'
import React from 'react'

type TestimonialProps = {
  name?: string
  title?: string
  avatar?: string
  quote: string
}

export default function Testimonial({ name, title, quote, avatar }: TestimonialProps) {
  return (
    <Box>
      <Stack
        bg={useColorModeValue('gray.50', 'gray.800')}
        boxShadow="lg"
        p={8}
        rounded="xl"
        align="center"
        pos="relative"
        _after={{
          content: '""',
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('gray.50', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <Text textAlign="center" color={useColorModeValue('gray.600', 'gray.400')} fontSize="sm">
          {quote}
        </Text>
      </Stack>
      <Flex align="center" mt={8} direction="column">
        <Avatar src={avatar} alt={name} mb={2} />
        <Stack spacing={-1} align="center">
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            {title}
          </Text>
        </Stack>
      </Flex>
    </Box>
  )
}
