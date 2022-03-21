import { Box, Menu, MenuItem, MenuList } from '@chakra-ui/react'

import React from 'react'

function HeroNavigation() {
  return (
    <Menu isOpen>
      <MenuList>
        <MenuItem>HOME</MenuItem>
        <MenuItem>ABOUT</MenuItem>
        <MenuItem>SKILLS</MenuItem>
        <MenuItem>PROJECTS</MenuItem>
        <MenuItem>CONTACT</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default HeroNavigation
