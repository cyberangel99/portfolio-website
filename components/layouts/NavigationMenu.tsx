import { Box, Button, HStack, Menu, MenuButton } from '@chakra-ui/react'
import React from 'react'

import { HASH_ROUTE_MENU_ITEMS } from '../../constants'
import SmoothScrollLink from '../shared/SmoothScrollLink'

export default function NavigationMenu({ isSticky }) {
  const textColor = !isSticky ? 'gray.50' : 'purple.400'
  const textBackground = !isSticky ? 'transparent' : 'gray.100'
  return (
    <Box bg="transparent" borderRadius={5} borderLeftRadius={0}>
      <HStack justifyContent="center" alignItems="center">
        {HASH_ROUTE_MENU_ITEMS.map((hashItem) => (
          <SmoothScrollLink key={hashItem.hash} to={hashItem.hash} scrollOffset={-50}>
            <Box key={hashItem.hash}>
              <Menu>
                <MenuButton
                  as={Button}
                  my={0}
                  color={textColor}
                  variant="ghost"
                  outline="none"
                  borderStyle="solid"
                  borderWidth={1}
                  borderColor="transparent"
                  size="sm"
                  isActive={false}
                  aria-label={hashItem.name.toUpperCase()}
                  _hover={{ color: 'purple.400', backgroundColor: 'gray.100' }}
                  _active={{
                    color: textColor,
                    backgroundColor: textBackground
                  }}
                >
                  {hashItem.name.toUpperCase()}
                </MenuButton>
              </Menu>
            </Box>
          </SmoothScrollLink>
        ))}
      </HStack>
    </Box>
  )
}
