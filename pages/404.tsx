import { Flex, Heading, Image, Text, Button } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import React from 'react'
import { FiHome } from 'react-icons/fi'

import { ROUTES } from '../constants'

export default function NotFound() {
  return (
    <>
      <NextSeo title="Not Found" />
      <Flex alignItems="center" justifyContent="center" h="100vh" p={8}>
        <Flex alignItems="center" justifyContent="center" direction="column">
          <Heading size="lg">Page not found!</Heading>
          <Text my={4}>The page you requested was not found.</Text>
          <Image src="/illustrations/error.svg" alt="No Results" maxWidth="100%" maxHeight={300} />
          <Button colorScheme="primary" variant="solid" leftIcon={<FiHome />} my={8}>
            <NextLink href={ROUTES.HOME}>RETURN TO HOME PAGE</NextLink>
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
