import { Flex, SimpleGrid, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { Element } from 'react-scroll'

import { HASH_ROUTES } from '../../constants'
import SectionTitle from '../shared/SectionTitle'
import WhileInView from '../shared/WhileInView'

export default function About() {
  const MotionImage = motion(Image)

  return (
    <Element name={HASH_ROUTES.ABOUT}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
        <Flex
          h={{ sm: 'full', md: '100vh' }}
          justifyContent="center"
          alignItems="flex-start"
          p={10}
        >
          <WhileInView>
            <SectionTitle title="About" subtitle="Coder, Gamer and Anime Nerd" />
            <Text my={4} lineHeight="2em">
              Hello and welcome to my site! My name is Mary and I am a Front-End Web Developer. I am
              originally from Northwest Ohio and I currently live in Houston, TX with my husband.
            </Text>
            <Text my={4} lineHeight="2em">
              My husband and I are huge anime and gamer nerds! We also go to anime and game
              conventions every year. We even have a game room to display our anime, games and
              collectables to show our love for anime and gaming! I also like to travel, code,
              collect videogames, eat Japanese food and ride my bike on the weekends. My personality
              type is usually "laid-back".
            </Text>
            <Text my={4} lineHeight="2em">
              I received a Web Client Developer Certificate in December 2018 at the College of
              DuPage in Glen Ellyn, Illinois.
            </Text>
          </WhileInView>
        </Flex>
        <Flex
          h={{ base: 'auto', lg: 'auto' }}
          alignItems="center"
          justifyContent="center"
          pos="relative"
          overflow="hidden"
        >
          <MotionImage
            src="/illustrations/about.svg"
            background="linear-gradient(rgba(49, 151, 149,0.9),rgba(21, 127, 207,0.5))"
            alt="About"
            maxW="full"
            w="full"
            h="full"
            zIndex={2}
            p={12}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              scale: [1, 1.01, 1],
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.5 }
            }}
          />
        </Flex>
      </SimpleGrid>
    </Element>
  )
}
