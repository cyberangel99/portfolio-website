import {
  Box,
  Stack,
  Container,
  Heading,
  SimpleGrid,
  HStack,
  Icon,
  VStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { FiCheck } from 'react-icons/fi'

import WhileInView from './WhileInView'

// eslint-disable-next-line prefer-spread
const features = Array.apply(null, Array(8)).map((x, i) => ({
  id: i,
  title: 'Lorem ipsum dolor sit amet',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
}))

export default function Services() {
  const MotionHStack = motion(HStack)
  const MotionSimpleGrid = motion(SimpleGrid)

  const serviceIconBackgroundColor = useColorModeValue('primary.400', 'primary.200')
  const serviceIconColor = useColorModeValue('gray.50', 'gray.700')

  return (
    <WhileInView>
      <Box p={8}>
        <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
          <Heading fontSize="3xl">Features</Heading>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </Text>
        </Stack>

        <Container maxW="6xl" mt={10}>
          <MotionSimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={10}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {features.map((feature) => (
              <MotionHStack
                key={feature.id}
                align="top"
                variants={{
                  hidden: { opacity: 0, y: -5 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <Box px={2}>
                  <Box bg={serviceIconBackgroundColor} borderRadius={5} px={4} py={3}>
                    <Icon color={serviceIconColor} as={FiCheck} />
                  </Box>
                </Box>
                <VStack align="start">
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text>{feature.text}</Text>
                </VStack>
              </MotionHStack>
            ))}
          </MotionSimpleGrid>
        </Container>
      </Box>
    </WhileInView>
  )
}
