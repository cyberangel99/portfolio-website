import {
  Box,
  Button,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

type PricingPlanProps = {
  title: string
  price: string
  frequency: string
  features: string[]
  popular?: boolean
}

export default function PricingPlan({
  title = '',
  price,
  frequency,
  features = [],
  popular = false
}: PricingPlanProps) {
  const popularBg = useColorModeValue('primary.300', 'primary.700')
  const popularColor = useColorModeValue('gray.700', 'gray.50')

  return (
    <Box
      mb={4}
      boxShadow="md"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.50', 'gray.700')}
      borderRadius="xl"
      pos="relative"
      bg={useColorModeValue('#FFF', 'gray.700')}
    >
      {popular && (
        <Box position="absolute" top="-16px" left="50%" style={{ transform: 'translate(-50%)' }}>
          <Text
            textTransform="uppercase"
            bg={popularBg}
            px={3}
            py={1}
            color={popularColor}
            fontSize="sm"
            fontWeight="400"
            rounded="xl"
          >
            Most Popular
          </Text>
        </Box>
      )}
      <Box py={4} px={12}>
        <Text fontWeight="500" fontSize="2xl">
          {title}
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" fontWeight="600">
            $
          </Text>
          <Text fontSize="5xl" fontWeight="900">
            {price}
          </Text>
          <Text fontSize="3xl">/{frequency}</Text>
        </HStack>
      </Box>
      <VStack py={4} borderBottomRadius="xl">
        <List spacing={3} textAlign="start" px={12}>
          {features.map((feature) => (
            <ListItem key={feature}>
              <ListIcon as={FiCheckCircle} color="teal.500" />
              {feature}
            </ListItem>
          ))}
        </List>
        <Box w="80%" pt={7}>
          <Button w="full" colorScheme="primary" variant="outline">
            GET IN TOUCH
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}
