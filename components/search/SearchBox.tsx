import {
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Spinner,
  HStack,
  InputRightElement,
  IconButton
} from '@chakra-ui/react'
import _ from 'lodash'
import React, { useEffect, useRef } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { clearSearchResults, globalSearch } from '../../state/modules/search'

export default function SearchBox() {
  const { isLoading } = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()
  const searchInput = useRef(null)

  useEffect(() => {
    searchInput.current.focus()
  }, [])

  const fetchResults = _.debounce((value) => {
    if (value.length > 0) {
      dispatch(globalSearch(value))
    } else {
      dispatch(clearSearchResults())
    }
  }, 800)

  const clearSearchBox = () => {
    searchInput.current.value = ''
    dispatch(clearSearchResults())
  }

  return (
    <>
      <HStack>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={!isLoading ? <Icon as={FiSearch} /> : <Spinner colorScheme="primary" />}
          />
          <Input
            defaultValue=""
            onChange={({ target }) => fetchResults(target.value)}
            variant="filled"
            ref={searchInput}
            placeholder="Search for anything"
          />
          {searchInput.current?.value.length > 0 && (
            <InputRightElement width="3rem">
              <IconButton
                aria-label="Clear Results"
                h="1.55rem"
                colorScheme="primary"
                size="sm"
                onClick={clearSearchBox}
                icon={<FiX />}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </HStack>
    </>
  )
}
