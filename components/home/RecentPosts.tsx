import { Box, Button, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { Element } from 'react-scroll'

import { HASH_ROUTES, ROUTES } from '../../constants'
import { IPost } from '../../interfaces'
import { useAppSelector } from '../../state/hooks'
import DisplayPosts from '../blog/DisplayPosts'
import SectionTitle from '../shared/SectionTitle'

export default function RecentPosts({ posts }: { posts: IPost[] }) {
  const { pagination } = useAppSelector((state) => state.ui.recentPosts)
  const bg = useColorModeValue('gray.200', 'gray.600')
  return (
    <Element name={HASH_ROUTES.RECENT_POSTS}>
      <Box h="100vh" bg={bg}>
        <Flex p={10}>
          <Container maxWidth="container.xl">
            <SectionTitle title="Latest Posts" subtitle="Get the latest scoop from our blog" />
            <Box mb={4}>
              <DisplayPosts posts={posts} columnGap={4} />
            </Box>
            {pagination?.total_results_size > 0 && (
              <Box>
                <Link href={ROUTES.POSTS}>
                  <a>
                    <Button colorScheme="primary" variant="solid" rightIcon={<FiChevronRight />}>
                      READ ALL POSTS
                    </Button>
                  </a>
                </Link>
              </Box>
            )}
          </Container>
        </Flex>
      </Box>
    </Element>
  )
}
