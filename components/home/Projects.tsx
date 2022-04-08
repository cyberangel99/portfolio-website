import { Flex, SimpleGrid } from '@chakra-ui/react'

import React from 'react'

import { Element } from 'react-scroll'

import { HASH_ROUTES } from '../../constants'
import SectionTitle from '../shared/SectionTitle'
import WhileInView from '../shared/WhileInView'

export default function Projects() {
  return (
    <Element name={HASH_ROUTES.PROJECTS}>
      <Flex h={{ sm: 'full', md: '100vh' }} justifyContent="center" alignItems="flex-start" p={10}>
        <WhileInView>
          <SectionTitle title="Projects" />
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={0}>
            asasas
          </SimpleGrid>
        </WhileInView>
      </Flex>
    </Element>
  )
}
