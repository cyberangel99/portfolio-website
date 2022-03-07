import { Icon, HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FiMenu } from 'react-icons/fi'

type MobileMenuButtonProps = {
  onOpen?: () => void
}

export default function MobileMenuButton({ onOpen }: MobileMenuButtonProps) {
  return (
    <HStack>
      <IconButton
        display={{ base: 'block', lg: 'none' }}
        aria-label="Mobile Menu Button"
        icon={<Icon as={FiMenu} />}
        size="md"
        colorScheme="primary"
        onClick={onOpen}
      />
    </HStack>
  )
}
