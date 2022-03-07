import { Tooltip, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ColorModeButton() {
  const { toggleColorMode } = useColorMode()
  const label = useColorModeValue('', '')
  const icon = useColorModeValue(<FiSun />, <FiMoon />)
  return (
    <Tooltip label={label} fontWeight="light" borderRadius={4} hasArrow placement="bottom">
      <IconButton
        aria-label="Toggle Color Mode"
        size="md"
        colorScheme="primary"
        onClick={() => toggleColorMode()}
        icon={icon}
      />
    </Tooltip>
  )
}
