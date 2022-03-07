import {
  AspectRatio,
  Badge,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import moment from 'moment'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import { FiCalendar } from 'react-icons/fi'

import Author from '../../components/author/Author'
import AuthorProfile from '../../components/author/AuthorProfile'
import PostTag from '../../components/blog/PostTag'
import AppLayout from '../../components/layouts/AppLayout'
import PageHeader from '../../components/shared/PageHeader'

import RenderRichText from '../../components/shared/RenderRichText'
import { ROUTES } from '../../constants'
import useUpdatePreviewRef from '../../hooks/preview'
import { IPost, IAuthor } from '../../interfaces'
import getAuthor from '../../services/authors'
import { getPost, getPosts } from '../../services/posts'
import getReadingTime from '../../utils/readingTime'

export async function getStaticProps({ params, previewData }) {
  try {
    const previewRef = previewData ? previewData.ref : null
    const refOption = previewRef ? { ref: previewRef } : null
    const { slug } = params
    const post = await getPost(slug, refOption)
    const { primary_author } = post.data
    const author = await getAuthor(primary_author.uid)

    return {
      props: {
        post,
        primary_author: author,
        previewRef
      },
      revalidate: 10
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export async function getStaticPaths() {
  try {
    const allPosts = await getPosts()
    // Pre-render all blog post pages
    const paths = allPosts.results.map((post) => ({
      params: { slug: post.uid }
    }))
    return { paths, fallback: false }
  } catch (error) {
    return { paths: [], fallback: false }
  }
}

export default function SinglePost({
  post,
  primary_author,
  previewRef
}: {
  post: IPost
  primary_author: IAuthor
  previewRef?: any
}) {
  const router = useRouter()
  const { asPath } = router
  const MotionContainer = motion(Container)
  const { first_publication_date, tags } = post
  const {
    primary_category,
    excerpt,
    authors,
    feature_image,
    title,
    content,
    canonical_url,
    meta_description,
    meta_title,
    og_description,
    og_image,
    og_title
  } = post.data
  const reading_time = getReadingTime(content)
  const breadcrumbs = [
    { name: 'Blog', url: `${ROUTES.POSTS}`, active: false },
    { name: RichText.asText(title), url: `${ROUTES.POSTS}/${post.uid}`, active: true }
  ]
  useUpdatePreviewRef(previewRef, post.id)
  return (
    <>
      <NextSeo
        canonical={canonical_url.url}
        title={meta_title || RichText.asText(title) || ''}
        description={meta_description || excerpt || ''}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}${asPath}`,
          title: og_title,
          description: og_description,
          site_name: process.env.NEXT_PUBLIC_WEBSITE_NAME,
          images: [
            {
              url: og_image.url || feature_image?.url,
              alt: og_title || RichText.asText(title)
            }
          ]
        }}
        twitter={{ cardType: 'summary_large_image' }}
        additionalMetaTags={[
          { name: 'twitter:title', content: RichText.asText(title) },
          { name: 'twitter:image', content: og_image.url || feature_image?.url },
          {
            name: 'twitter:description',
            content: og_description || excerpt || ''
          }
        ]}
      />
      <AppLayout>
        <MotionContainer
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.6 }
          }}
          maxWidth="container.lg"
          p={8}
        >
          <PageHeader
            title={
              <HStack justifyContent="center" alignItems="center">
                {primary_category && (
                  <Badge
                    variant="subtle"
                    colorScheme="accent"
                    fontSize="md"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {primary_category?.data?.name?.toUpperCase()}
                  </Badge>
                )}
                <div>{RichText.asText(title)}</div>
              </HStack>
            }
            breadcrumbs={breadcrumbs}
          />
          <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 12, md: 12 }}>
              <HStack spacing="5px" my={2} justifyContent="center">
                <Flex>{authors && <Author authors={authors} size="md" />}</Flex>
                <Flex direction="column" justifyContent="center">
                  {authors && (
                    <Text as="p">
                      {authors.map((author) => author?.author?.data?.name).join(', ')}
                    </Text>
                  )}
                  <HStack>
                    {first_publication_date && (
                      <Text>
                        <Icon as={FiCalendar} mb={1} />{' '}
                        {moment(first_publication_date).format('ll')}
                      </Text>
                    )}
                    {!first_publication_date && <Text>NEVER PUBLISHED</Text>}
                    <Center height="20px">
                      <Divider orientation="vertical" borderLeftWidth={2} />
                    </Center>
                    <Badge colorScheme="primary" ml={2} as="div">
                      {reading_time.text}
                    </Badge>
                  </HStack>
                </Flex>
              </HStack>
              <Divider mb={10} mt={4} />
              <SimpleGrid columns={{ base: 1, md: 1 }} gap={2}>
                <Box>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={feature_image.url}
                      borderRadius={5}
                      margin="0 auto"
                      mb={1}
                      w="full"
                      maxW="100%"
                      title={RichText.asText(title)}
                    />
                  </AspectRatio>
                </Box>
                <Box>
                  <Text fontSize="md" opacity=".9" mt={2} mb={8} fontWeight={400} lineHeight="2">
                    {excerpt}
                  </Text>
                </Box>
              </SimpleGrid>
              <Divider mb={10} mt={4} />
              <Box>
                <RenderRichText content={content} />
                <Box my={2}>{tags && tags.map((tag) => <PostTag key={tag} tag={tag} />)}</Box>
              </Box>
              <Divider mb={10} mt={4} />
              <Box>{primary_author && <AuthorProfile author={primary_author} />}</Box>
            </GridItem>
          </Grid>
        </MotionContainer>
      </AppLayout>
    </>
  )
}
