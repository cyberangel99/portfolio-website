import { Box, Container, HStack, Heading } from '@chakra-ui/react'
import React from 'react'

import { IAuthor } from '../../interfaces'
import RenderRichText from '../shared/RenderRichText'

import Author from './Author'

export default function AuthorProfile({ author }: { author: IAuthor }) {
  const { bio, name } = author.data
  return (
    <Container maxW="container.lg">
      <HStack spacing="20px" alignItems="center" flexDir={{ base: 'column', md: 'row' }}>
        <Author size="xl" author={author} />
        <Box>
          <Heading size="md" mt={{ base: 8, md: 0 }}>
            Written by {name}
          </Heading>
          {bio && (
            <Box opacity=".8" fontSize="sm">
              <RenderRichText content={bio} />
            </Box>
          )}
        </Box>
      </HStack>
    </Container>
  )
}
