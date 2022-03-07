import {
  Text,
  Container,
  Box,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import React, { useState } from 'react'

import AppLayout from '../components/layouts/AppLayout'
import PricingPlan from '../components/pricing/PricingPlan'
import PageHeader from '../components/shared/PageHeader'

export default function PricingPage() {
  const [frequency, setFrequency] = useState('month')

  return (
    <>
      <NextSeo title="Pricing" />
      <AppLayout>
        <PageHeader
          title="Pricing"
          subtitle="Libero id faucibus nisl tincidunt. Bibendum neque egestas congue quisque egestas diam."
        />
        <Container maxW="container.lg" centerContent p={8}>
          <Box py={6}>
            <VStack spacing={2} textAlign="center">
              <Text fontSize="md" pb={2}>
                Start with 14-day free trial. No credit card needed. Cancel at anytime.
              </Text>
              <HStack
                spacing="5px"
                bg={useColorModeValue('gray.200', 'gray.600')}
                px={4}
                py={2}
                borderRadius={5}
              >
                <Button
                  colorScheme="primary"
                  variant={frequency === 'month' ? 'solid' : 'ghost'}
                  size="sm"
                  onClick={() => setFrequency('month')}
                >
                  MONTHLY
                </Button>
                <Button
                  colorScheme="primary"
                  variant={frequency === 'year' ? 'solid' : 'ghost'}
                  size="sm"
                  onClick={() => setFrequency('year')}
                >
                  YEARLY
                </Button>
              </HStack>
            </VStack>
            <SimpleGrid
              columns={{ base: 1, lg: 3 }}
              gap={4}
              textAlign="center"
              justifyContent="center"
              alignItems="stretch"
              py={10}
            >
              <PricingPlan
                title="Hobby"
                price="79"
                frequency={frequency}
                features={[
                  'Unlimited build minutes',
                  'Lorem, ipsum dolor.',
                  '5TB Lorem, ipsum dolor.'
                ]}
              />

              <PricingPlan
                title="Growth"
                price="149"
                frequency={frequency}
                features={[
                  'Unlimited build minutes',
                  'Lorem, ipsum dolor.',
                  '5TB Lorem, ipsum dolor.',
                  'Lorem, ipsum.'
                ]}
                popular
              />

              <PricingPlan
                title="Scale"
                price="349"
                frequency={frequency}
                features={[
                  'Unlimited build minutes',
                  'Lorem, ipsum dolor.',
                  '5TB Lorem, ipsum dolor.'
                ]}
              />
            </SimpleGrid>
          </Box>
        </Container>
      </AppLayout>
    </>
  )
}
