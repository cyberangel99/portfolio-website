import {
  Box,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerFooter,
  DrawerOverlay
} from '@chakra-ui/react'

import Link from 'next/link'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { MENU_ITEMS } from '../../constants'

export default function MobileNavigationMenu({ isOpen = false, onClose = () => {} }) {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader />
        <DrawerBody>
          <Box borderRadius={5} borderLeftRadius={0} py={8}>
            <VStack justifyContent="center" alignItems="center">
              {MENU_ITEMS.map((hashItem) => (
                <Box key={hashItem.url} w="full">
                  {!hashItem.children && (
                    <Link href={hashItem.url} passHref>
                      <a>
                        <Button
                          my={0}
                          variant="ghost"
                          outline="none"
                          borderStyle="solid"
                          borderWidth={1}
                          borderColor="transparent"
                          justifyContent="start"
                          size="md"
                          w="full"
                          isActive={false}
                          aria-label={hashItem.name.toUpperCase()}
                        >
                          {hashItem.name.toUpperCase()}
                        </Button>
                      </a>
                    </Link>
                  )}
                  {hashItem.children && (
                    <Menu>
                      <MenuButton
                        as={Button}
                        my={0}
                        rightIcon={<FiChevronDown />}
                        variant="ghost"
                        outline="none"
                        borderStyle="solid"
                        w="full"
                        borderWidth={1}
                        borderColor="transparent"
                        justifyContent="start"
                        textAlign="left"
                        size="md"
                        isActive={false}
                        aria-label={hashItem.name.toUpperCase()}
                      >
                        {hashItem.name.toUpperCase()}
                      </MenuButton>
                      <MenuList w="full">
                        {hashItem.children.map((child) => (
                          <Link href={child.url} passHref key={child.name}>
                            <a>
                              <MenuItem w="full">{child.name.toUpperCase()}</MenuItem>
                            </a>
                          </Link>
                        ))}
                      </MenuList>
                    </Menu>
                  )}
                </Box>
              ))}
            </VStack>
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="link" onClick={onClose}>
            CLOSE
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
