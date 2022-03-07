import { IconButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

import { useAppDispatch } from '../../state/hooks'
import { clearSearchResults } from '../../state/modules/search'
import SearchModal from '../search/SearchModal'

export default function SearchButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useAppDispatch()

  const handleModalOpen = () => {
    dispatch(clearSearchResults())
    onOpen()
  }

  const handleModalClose = () => {
    onClose()
    dispatch(clearSearchResults())
  }

  return (
    <>
      <IconButton
        onClick={handleModalOpen}
        aria-label="Site Search"
        size="md"
        colorScheme="primary"
        icon={<FiSearch />}
      />
      <SearchModal isOpen={isOpen} onClose={handleModalClose} />
    </>
  )
}
