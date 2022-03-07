import { AspectRatio, Image } from '@chakra-ui/react'
import NextLink from 'next/link'
import { RichText } from 'prismic-reactjs'
import React from 'react'

import { ROUTES } from '../../constants'
import { IPost } from '../../interfaces'

export default function PostImage({ post, height = 250 }: { post: IPost; height?: number }) {
  const { uid } = post
  const { feature_image, title } = post.data
  const postLink = `${ROUTES.POSTS}/${uid}`
  return (
    <NextLink href={postLink}>
      <a>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={feature_image.url}
            borderRadius={5}
            margin="0 auto"
            mb={1}
            w="full"
            maxW="100%"
            maxH={height}
            title={RichText.asText(title)}
          />
        </AspectRatio>
      </a>
    </NextLink>
  )
}
