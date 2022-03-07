import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  title?: string | ReactNode
  subtitle?: string | ReactNode
  breadcrumbs?: IBreadcrumb[]
}

type IBreadcrumb = {
  name: string
  url: string
  active?: boolean
}

export default function PageHeader({ title = '', subtitle, breadcrumbs }: Props) {
  return (
    <Flex
      pos="relative"
      pt={{ base: '25%', lg: '15%' }}
      pb="10%"
      alignItems="center"
      zIndex={1}
      justifyContent="center"
      bg="url(/images/hero.png) no-repeat center center / cover"
      _before={{
        content: '""',
        h: 'full',
        w: 'full',
        pos: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.9,
        zIndex: -1,
        bg: useColorModeValue('gray.100', 'gray.800')
      }}
    >
      <Container maxWidth="container.xl" centerContent textAlign="center">
        <Flex direction="column">
          {title && (
            <Heading as="h1" size="xl">
              {title}
            </Heading>
          )}
          {subtitle && (
            <Text fontSize="md" opacity=".7" my={2}>
              {subtitle}
            </Text>
          )}
          {breadcrumbs && (
            <Breadcrumb my={2} size="sm">
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} href="/">
                  HOME
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((b) => (
                <BreadcrumbItem key={b.name} isCurrentPage={b.active}>
                  <BreadcrumbLink as={Link} href={b.url}>
                    {b.name.toUpperCase()}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          )}
        </Flex>
      </Container>
    </Flex>
  )
}
