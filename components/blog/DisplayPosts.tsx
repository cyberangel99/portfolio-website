import { Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

import { ROUTES } from '../../constants'
import { IPagination, IPost } from '../../interfaces'
import Pagination from '../shared/Pagination'

import Post from './Post'

type Props = {
  posts: IPost[]
  rowGap?: number
  columnGap?: number
  width?: string
  columns?: { base?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number }
  pagination?: IPagination
}

export default function DisplayPosts({
  posts,
  rowGap = 8,
  columnGap = 8,
  width = 'full',
  columns = { base: 1, md: 2, lg: 3 },
  pagination = null
}: Props) {
  return (
    <>
      {posts?.length > 0 && (
        <div>
          <SimpleGrid columns={columns} rowGap={rowGap} columnGap={columnGap} width={width} mb={16}>
            {posts.map((post: IPost, i: number) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: i / 20 }
                }}
              >
                <Post post={post} />
              </motion.div>
            ))}
          </SimpleGrid>
          {pagination && (
            <Pagination pagination={pagination} prevRoute={ROUTES.POSTS} nextRoute={ROUTES.POSTS} />
          )}
        </div>
      )}
      {posts?.length === 0 && (
        <Flex
          alignItems="center"
          justifyContent="center"
          h="100%"
          w="full"
          direction="column"
          my={4}
        >
          <Image src="/illustrations/empty.svg" alt="No Results" maxWidth={450} />
          <Heading as="p" size="sm" my={6} fontWeight="400">
            No blog posts exist for this website. If you`re one of the writers, maybe create your
            first posts?
          </Heading>
        </Flex>
      )}
    </>
  )
}
