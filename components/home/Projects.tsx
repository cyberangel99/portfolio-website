import { Flex, SimpleGrid, Box, Image } from '@chakra-ui/react'

import React from 'react'

import { Element } from 'react-scroll'

import { HASH_ROUTES } from '../../constants'
import SectionTitle from '../shared/SectionTitle'
import WhileInView from '../shared/WhileInView'

export default function Projects() {
  return (
    <Element name={HASH_ROUTES.PROJECTS}>
      <Flex h={{ sm: 'full', md: '100vh' }} justifyContent="center" alignItems="center" p={10}>
        <WhileInView>
          <Box textAlign="center">
            <SectionTitle title="Projects" />
          </Box>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={0}>
            <Box>
              <Image src="../images/portfolio-1.png" alt="portfolio-1" />
            </Box>
            <Box>
              <Image src="../images/portfolio-2.png" alt="portfolio-2" />
            </Box>
            <Box>
              <Image src="../images/portfolio-3.png" alt="portfolio-3" />
            </Box>
            <Box>
              <Image src="../images/portfolio-4.png" alt="portfolio-4" />
            </Box>
          </SimpleGrid>
        </WhileInView>
      </Flex>
    </Element>
  )
}
