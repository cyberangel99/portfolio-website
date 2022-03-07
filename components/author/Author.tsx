import { Avatar, AvatarGroup, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

import { IAuthor, IAuthorLink } from '../../interfaces'

type Props = {
  author?: IAuthor
  authors?: [{ author: IAuthorLink }]
  size?: string
  max?: number
}

export default function Author({ author = null, authors = null, size = 'sm', max = 5 }: Props) {
  const colorModeValue = useColorModeValue('gray.200', 'gray.500')

  return (
    <>
      {author && (
        <Avatar
          title={author.data.name}
          size={size}
          borderColor={colorModeValue}
          name={author?.data?.name}
          src={author.data?.profile_image?.url}
        />
      )}
      {authors && (
        <AvatarGroup size={size} max={max}>
          {authors
            .filter((a) => !a.author)
            .map((a) => {
              const writer = a.author
              const { name, profile_image } = writer.data
              return (
                <Avatar
                  key={writer.id}
                  title={name}
                  borderColor={colorModeValue}
                  name={name}
                  src={profile_image?.url}
                />
              )
            })}
        </AvatarGroup>
      )}
    </>
  )
}
