import { List, ListItem, Text, Link, Divider, Badge, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import moment from 'moment'
import NextLink from 'next/link'
import { RichText } from 'prismic-reactjs'
import React from 'react'

import { ROUTES } from '../../constants'
import { IPost } from '../../interfaces'
import { useAppSelector } from '../../state/hooks'
import getReadingTime from '../../utils/readingTime'
import PostCategory from '../blog/PostCategory'
import PostImage from '../blog/PostImage'
import Widget from '../shared/Widget'

export default function RecentPostsWidget({ displayImage = true }: { displayImage?: boolean }) {
  const { data, pagination, isError, isSuccess, isLoading } = useAppSelector(
    (state) => state.ui.recentPosts
  )
  const MotionListItem = motion(ListItem)
  if (isSuccess && !data) return <div />
  return (
    <Widget
      loading={isLoading}
      error={isError}
      errorMessage="An error occurred loading these posts. Please try again."
    >
      {isSuccess && pagination.total_results_size === 0 && (
        <Text my={8}>
          I have not published any posts for my website. Please come back later and you might see
          some posts here.
        </Text>
      )}
      <List spacing={3} py={2}>
        {data?.map((post: IPost, i: number) => {
          const { uid, first_publication_date } = post
          const { title, content, primary_category } = post.data
          const reading_time = getReadingTime(content)
          return (
            <MotionListItem
              key={uid}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: i / 10 }
              }}
            >
              {displayImage && (
                <NextLink href={`${ROUTES.POSTS}/${uid}`}>
                  <div>
                    <PostImage post={post} />
                  </div>
                </NextLink>
              )}
              <NextLink href={`${ROUTES.POSTS}/${uid}`} passHref>
                <Link my={2} display="inline-block" fontSize="lg">
                  {RichText.render(title)}
                </Link>
              </NextLink>
              <HStack>
                <Text>{moment(first_publication_date).format('ll')}</Text>
                <Divider orientation="vertical" />
                <Badge colorScheme="accent">{reading_time.text}</Badge>
                {primary_category && primary_category.data && <Divider orientation="vertical" />}
                {primary_category && primary_category.data && (
                  <PostCategory category={primary_category} />
                )}
              </HStack>
            </MotionListItem>
          )
        })}
      </List>
    </Widget>
  )
}
