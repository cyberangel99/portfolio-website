import {
  Box,
  useColorModeValue,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  Icon
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { FiAlertCircle } from 'react-icons/fi'

interface Props {
  children?: ReactNode
  loading?: boolean
  error?: boolean
  errorMessage?: string
}

const ANIMATION_SPEED = 1.2

export default function Widget(props: Props) {
  const {
    loading = false,
    children,
    error = false,
    errorMessage = 'An error occurred trying to load this data. Please try again.'
  } = props

  const errorTextColor = useColorModeValue('red.400', 'red.100')

  return (
    <Box>
      {loading && <SkeletonCircle size="10" isLoaded={!loading} speed={ANIMATION_SPEED} />}
      {loading && (
        <SkeletonText
          mt="4"
          noOfLines={4}
          spacing="4"
          isLoaded={!loading}
          speed={ANIMATION_SPEED}
        />
      )}
      <Skeleton isLoaded={!loading} speed={ANIMATION_SPEED}>
        {!error && <div>{children}</div>}
        {error && (
          <Text color={errorTextColor}>
            <Icon as={FiAlertCircle} boxSize={5} mx={2} /> {errorMessage}
          </Text>
        )}
      </Skeleton>
    </Box>
  )
}
