import {
  Box,
  Text,
  Badge,
  Heading,
  Button,
  Grid,
  GridItem,
  Wrap,
  Center,
  WrapItem,
  Divider,
  HStack
} from '@chakra-ui/react'
import { truncate } from 'lodash'
import moment from 'moment'
import NextLink from 'next/link'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { ROUTES } from '../../constants'
import { IPost } from '../../interfaces'

import getReadingTime from '../../utils/readingTime'
import Author from '../author/Author'

import PostCategory from './PostCategory'
import PostImage from './PostImage'

export default function Post({ post }: { post: IPost }) {
  const { uid, first_publication_date } = post
  const { excerpt, feature_image, authors, primary_category, title, content } = post.data
  const postLink = `${ROUTES.POSTS}/${uid}`
  const reading_time = getReadingTime(content)
  return (
    <Box pos="relative" borderRadius={5} p={0}>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 12, md: 12 }} my={0}>
          {/* FEATURED IMAGE */}
          <Box>{feature_image && <PostImage post={post} />}</Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 12 }} my={0}>
          <Wrap spacing="10px" my={2}>
            <WrapItem>
              <Center>
                {/* DATE */}
                <Text>{moment(first_publication_date).format('ll')}</Text>
              </Center>
            </WrapItem>
            <WrapItem>
              <Divider orientation="vertical" />
            </WrapItem>
            <WrapItem>
              {reading_time && (
                <Center>
                  {/* READING TIME */}
                  <Badge colorScheme="primary">{reading_time.text}</Badge>
                </Center>
              )}
            </WrapItem>
          </Wrap>
          {/* TITLE */}
          <Heading as="h3" size="md" mb={2} fontWeight={400}>
            <NextLink href={postLink}>{RichText.asText(title)}</NextLink>
          </Heading>

          {/* EXCERPT */}
          {excerpt && (
            <Text as="span" fontSize="sm" my={2}>
              <NextLink href={postLink}>{truncate(excerpt, { length: 100 })}</NextLink>
            </Text>
          )}
          {/* CATEGORY */}
          {primary_category && primary_category.data && (
            <HStack spacing={4} my={3}>
              <PostCategory category={primary_category} />
            </HStack>
          )}
          {/* AUTHOR */}
          {authors && (
            <Text as="div" my={4}>
              <Author authors={authors} />
            </Text>
          )}
          {/* CTA */}
          <div>
            <Button colorScheme="primary" variant="link" rightIcon={<FiChevronRight />}>
              <NextLink href={postLink}>READ MORE</NextLink>
            </Button>
          </div>
        </GridItem>
      </Grid>
    </Box>
  )
}
