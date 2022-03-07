import {
  Container,
  GridItem,
  Grid,
  Heading,
  Spinner,
  Center,
  VStack,
  Button,
  Flex,
  Image,
  Text
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { FiRotateCcw } from 'react-icons/fi'

import DisplayPosts from '../../components/blog/DisplayPosts'
import AppLayout from '../../components/layouts/AppLayout'
import PageHeader from '../../components/shared/PageHeader'
import { ROUTES } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { fetchPosts } from '../../state/modules/posts'

export default function Posts() {
  const router = useRouter()
  const { page } = router.query
  const dispatch = useAppDispatch()
  const { data, pagination, isError, error, isSuccess, isLoading } = useAppSelector(
    (state) => state.posts
  )

  const grabPosts = useCallback(() => {
    dispatch(fetchPosts({ pageSize: 10, page: page || 1 }))
  }, [dispatch, page])

  useEffect(() => {
    grabPosts()
  }, [grabPosts])

  const breadcrumbs = [{ name: 'Blog', url: `${ROUTES.POSTS}`, active: true }]

  return (
    <>
      <NextSeo title="Blog" />
      <AppLayout>
        <PageHeader
          title="Blog"
          subtitle="A collection of my thoughts on anything relating to the technology industry."
          breadcrumbs={breadcrumbs}
        />
        <Container maxWidth="container.xl" p={8}>
          <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 12, md: 12 }}>
              {isSuccess && <DisplayPosts posts={data} pagination={pagination} />}
              {isLoading && (
                <Center>
                  <VStack py={8}>
                    <Heading as="h2" size="md" mb={6}>
                      Fetching blog posts from the servers...
                    </Heading>
                    <Spinner
                      thickness="4px"
                      speed="0.70s"
                      emptyColor="gray.200"
                      color="primary.500"
                      size="xl"
                    />
                  </VStack>
                </Center>
              )}
              {isError && (
                <Flex alignItems="center" justifyContent="center" direction="column">
                  <Image
                    src="/illustrations/error.svg"
                    alt="Error"
                    maxWidth="100%"
                    maxHeight={300}
                  />
                  <Text my={4}>{error}</Text>
                  <Button
                    colorScheme="primary"
                    variant="solid"
                    leftIcon={<FiRotateCcw />}
                    my={8}
                    onClick={() => grabPosts()}
                  >
                    RELOAD AND TRY AGAIN
                  </Button>
                </Flex>
              )}
            </GridItem>
          </Grid>
        </Container>
      </AppLayout>
    </>
  )
}
