import {
  Link,
  List,
  ListItem,
  Heading,
  Box,
  Alert,
  AlertIcon,
  HStack,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import moment from 'moment'
import { useRouter } from 'next/router'
import { RichText } from 'prismic-reactjs'
import React from 'react'

import { ROUTES } from '../../constants'
import { IPost } from '../../interfaces'

export default function DisplaySearchResults({
  results,
  onClose
}: {
  results: (IPost | any)[]
  onClose: () => void
}) {
  const router = useRouter()
  const linkColor = useColorModeValue('primary.500', 'primary.200')
  // Split search results by the result type
  const posts = results.filter((item) => item.type === 'posts')

  const handleLinkClick = (link: string) => {
    router.push(link)
    onClose()
  }

  return (
    <>
      {results.length > 0 && (
        <Box>
          {posts.length > 0 && (
            <Box>
              <Heading size="sm" my={4} textTransform="uppercase" opacity=".7">
                Posts
              </Heading>
              <List spacing={4}>
                {posts.map((post: IPost) => {
                  const { title } = post.data
                  return (
                    <ListItem key={post.id}>
                      <HStack>
                        <Badge colorScheme="secondary" fontWeight="normal">
                          {moment(post.first_publication_date).format('ll')}
                        </Badge>
                        <Link
                          color={linkColor}
                          onClick={() => handleLinkClick(`${ROUTES.POSTS}/${post.uid}`)}
                        >
                          {RichText.asText(title)}
                        </Link>
                      </HStack>
                    </ListItem>
                  )
                })}
              </List>
            </Box>
          )}
        </Box>
      )}
      {results.length === 0 && (
        <Alert status="warning" colorScheme="primary" borderRadius={5}>
          <AlertIcon />
          No results found for your search query.
        </Alert>
      )}
    </>
  )
}
