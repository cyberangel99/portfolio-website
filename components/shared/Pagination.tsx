import { Flex, Button, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { IPagination } from '../../interfaces'

type Props = {
  pagination: IPagination
  prevRoute: string
  nextRoute: string
}

export default function Pagination({ pagination, prevRoute, nextRoute }: Props) {
  const { next_page, prev_page, page } = pagination

  const router = useRouter()

  const onForward = () => {
    router.push({ pathname: nextRoute, query: { page: page + 1 } }, null, {
      scroll: false
    })
  }

  const onPrevious = () => {
    router.push({ pathname: prevRoute, query: { page: page - 1 } }, null, {
      scroll: false
    })
  }

  return (
    <Flex direction="row">
      <Flex alignItems="flex-end" w="full">
        {prev_page && (
          <Button
            colorScheme="primary"
            variant="solid"
            w="full"
            mr={2}
            leftIcon={<FiChevronLeft />}
            onClick={onPrevious}
          >
            BACK
          </Button>
        )}
      </Flex>
      <Spacer />
      <Flex w="full">
        {next_page && (
          <Button
            colorScheme="primary"
            variant="solid"
            w="full"
            ml={2}
            rightIcon={<FiChevronRight />}
            onClick={onForward}
          >
            NEXT
          </Button>
        )}
      </Flex>
    </Flex>
  )
}
