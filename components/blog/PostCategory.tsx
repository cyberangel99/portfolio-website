import { Tag, TagLabel } from '@chakra-ui/react'
import React from 'react'

export default function PostCategory({ category }) {
  const {
    data: { name }
  } = category

  return (
    <Tag size="sm" variant="subtle" colorScheme="primary" cursor="default">
      <TagLabel>{name}</TagLabel>
    </Tag>
  )
}
