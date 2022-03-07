import { Flex, HStack, Icon, Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function ContactItem({ icon, text, url, target = '_self' }) {
  const bg = useColorModeValue('gray.100', 'gray.700')
  const link = useColorModeValue('blueGrey.500', 'blueGrey.100')
  return (
    <Flex alignItems="center" justifyContent="center" bg={bg} p={4} borderRadius={5}>
      <HStack>
        <Icon as={icon} />
        <Link href={url} color={link} target={target}>
          {text}
        </Link>
      </HStack>
    </Flex>
  )
}
