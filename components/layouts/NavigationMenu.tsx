import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { MENU_ITEMS } from '../../constants'

export default function NavigationMenu() {
  return (
    <Box bg="transparent" borderRadius={5} borderLeftRadius={0}>
      <HStack justifyContent="center" alignItems="center">
        {MENU_ITEMS.map((hashItem) => (
          <Box key={hashItem.url}>
            {!hashItem && (
              <Link href={hashItem.url} passHref>
                <a>
                  <Button
                    my={0}
                    variant="ghost"
                    outline="none"
                    borderStyle="solid"
                    borderWidth={1}
                    borderColor="transparent"
                    size="sm"
                    isActive={false}
                    aria-label={hashItem.name.toUpperCase()}
                  >
                    {hashItem.name.toUpperCase()}
                  </Button>
                </a>
              </Link>
            )}
            {hashItem && (
              <Menu>
                <MenuButton
                  as={Button}
                  my={0}
                  rightIcon={<FiChevronDown />}
                  variant="ghost"
                  outline="none"
                  borderStyle="solid"
                  borderWidth={1}
                  borderColor="transparent"
                  size="sm"
                  isActive={false}
                  aria-label={hashItem.name.toUpperCase()}
                >
                  {hashItem.name.toUpperCase()}
                </MenuButton>
              </Menu>
            )}
          </Box>
        ))}
      </HStack>
    </Box>
  )
}
