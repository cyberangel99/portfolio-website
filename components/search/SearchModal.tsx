import {
  Flex,
  Heading,
  Divider,
  Badge,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

import { useAppSelector } from '../../state/hooks'

import DisplaySearchResults from './DisplaySearchResults'
import SearchBox from './SearchBox'

export default function SearchModal({ onClose, isOpen }: { onClose: () => void; isOpen: boolean }) {
  const { data, pagination, isLoading, isSuccess, isError } = useAppSelector(
    (state) => state.search
  )
  const total_results_size = pagination?.total_results_size
  const spinnerColor = useColorModeValue('primary.500', 'primary.300')

  return (
    <>
      <Modal onClose={onClose} size="xl" isOpen={isOpen} closeOnOverlayClick>
        <ModalOverlay />
        <ModalContent pb={4}>
          <ModalHeader>
            <HStack spacing="8px" height="100%">
              <Heading fontWeight={400} size="md">
                SEARCH
              </Heading>
              <Divider orientation="vertical" borderLeftWidth={3} />
              {data && (
                <Badge colorScheme="accent" fontWeight="normal">
                  {' '}
                  {total_results_size === 1
                    ? `${total_results_size} Result`
                    : `${total_results_size} Results`}
                </Badge>
              )}
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex my={5} direction="column">
              <SearchBox />
            </Flex>
            <Flex direction="column">
              {data && isSuccess && <DisplaySearchResults results={data} onClose={onClose} />}
              {isLoading && (
                <Flex alignItems="center" justifyContent="center" direction="column">
                  <Heading as="h2" size="sm" mb={3}>
                    Loading search results...
                  </Heading>
                  <Spinner
                    thickness="4px"
                    speed="0.50s"
                    emptyColor="gray.200"
                    color={spinnerColor}
                    size="xl"
                  />
                </Flex>
              )}
              {isError && (
                <Alert status="error" borderRadius={5}>
                  <AlertIcon />
                  <Box flex="1">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription display="block">
                      There was an error with the server. Please try again.
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
