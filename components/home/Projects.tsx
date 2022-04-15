import { Flex, SimpleGrid, Box, Image, Heading, Text, Link } from '@chakra-ui/react'

import React from 'react'

import { Element } from 'react-scroll'

import { HASH_ROUTES } from '../../constants'
import SectionTitle from '../shared/SectionTitle'
import WhileInView from '../shared/WhileInView'

export default function Projects() {
  return (
    <Element name={HASH_ROUTES.PROJECTS}>
      <Flex h={{ sm: 'full', md: 'full' }} justifyContent="center" alignItems="center" p={10}>
        <WhileInView>
          <Box textAlign="center">
            <SectionTitle title="Projects" />
          </Box>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={0}>
            <Box ml={5}>
              <Link href="https://cyberangel99.github.io/Farmermarket/" isExternal>
                <Image src="../images/portfolio-1.png" alt="portfolio-1" />
              </Link>
              <Box color="gray.500" fontSize="sm" textAlign="center">
                <Heading as="h4" size="md" color="gray.500" fontWeight="semibold" m={3}>
                  Farmer`s Market
                </Heading>
                <Text mb={5}>Built with HTML, CSS, Javascript and UIkit framework.</Text>
              </Box>
            </Box>
            <Box ml={5}>
              <Link href="https://cyberangel99.github.io/nextgeneration/" isExternal>
                <Image src="../images/portfolio-2.png" alt="portfolio-2" />
              </Link>
              <Box color="gray.500" fontSize="sm" textAlign="center">
                <Heading as="h4" size="md" color="gray.500" fontWeight="semibold" m={3}>
                  Next Generation
                </Heading>
                <Text mb={5}>Created using HTML, CSS, Javascript and Bootstrap framework.</Text>
              </Box>
            </Box>
            <Box ml={5}>
              <Link href="https://comptex.netlify.app" isExternal>
                <Image src="../images/portfolio-3.png" alt="portfolio-3" />
              </Link>
              <Box color="gray.500" fontSize="sm" textAlign="center">
                <Heading as="h4" size="md" color="gray.500" fontWeight="semibold" m={3}>
                  Comptex Solutions
                </Heading>
                <Text mb={5}>Built with HTML, CSS, React JS and Chakra framework.</Text>
              </Box>
            </Box>
            <Box ml={5}>
              <Link href="https://readaway.netlify.app" isExternal>
                <Image src="../images/portfolio-4.png" alt="portfolio-4" />
              </Link>
              <Box color="gray.500" fontSize="sm" textAlign="center">
                <Heading as="h4" size="md" color="gray.500" fontWeight="semibold" m={3}>
                  Readaway
                </Heading>
                <Text mb={5}>Created using HTML, CSS, React JS and Bootstrap framework.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </WhileInView>
      </Flex>
    </Element>
  )
}
