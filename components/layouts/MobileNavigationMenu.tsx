import {
  Box,
  VStack,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerFooter,
  DrawerOverlay
} from '@chakra-ui/react'

import React from 'react'

import { HASH_ROUTE_MENU_ITEMS } from '../../constants'
import SmoothScrollLink from '../shared/SmoothScrollLink'

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
              {HASH_ROUTE_MENU_ITEMS.map((hashItem) => (
                <Box key={hashItem.hash} w="full">
                  <SmoothScrollLink to={hashItem.hash} scrollOffset={-50}>
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
                      onClick={onClose}
                    >
                      {hashItem.name.toUpperCase()}
                    </Button>
                  </SmoothScrollLink>
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
