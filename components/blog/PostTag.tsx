import { Tag, TagLabel, TagRightIcon } from '@chakra-ui/react'
import React from 'react'
import { FiTag } from 'react-icons/fi'

export default function PostTag({ tag }: { tag: string }) {
  return (
    <Tag size="sm" variant="subtle" colorScheme="secondary" cursor="default" mx={1}>
      <TagLabel>{tag}</TagLabel>
      <TagRightIcon as={FiTag} />
    </Tag>
  )
}
