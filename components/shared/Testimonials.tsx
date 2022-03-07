import { Box, Heading, Text, Stack, Container, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

import Testimonial from '../testimonials/Testimonial'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jane Cooper',
      title: 'CEO at ABC Corporation',
      avatar:
        'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdie nibh lectus feugiat nunc sem.'
    },
    {
      name: 'Jessica Cooper',
      title: 'CEO at ABC Corporation',
      avatar:
        'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdie nibh lectus feugiat nunc sem.'
    },
    {
      name: 'Sally Cooper',
      title: 'CEO at ABC Corporation',
      avatar:
        'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdie nibh lectus feugiat nunc sem.'
    }
  ]
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW="7xl" py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align="center">
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
          {testimonials.map((testimonial) => {
            const { name, avatar, quote, title } = testimonial
            return (
              <Testimonial key={name} name={name} avatar={avatar} quote={quote} title={title} />
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}
