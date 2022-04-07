import {
  Flex,
  SimpleGrid,
  Image,
  Text,
  Box,
  List,
  ListItem,
  ListIcon,
  Button
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { GoGear } from 'react-icons/go'

import { Element } from 'react-scroll'

import { HASH_ROUTES } from '../../constants'
import SectionTitle from '../shared/SectionTitle'
import WhileInView from '../shared/WhileInView'

export default function Skills() {
  const MotionImage = motion(Image)

  return (
    <Element name={HASH_ROUTES.ABOUT}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
        <Flex
          h={{ base: 'auto', lg: 'auto' }}
          alignItems="center"
          justifyContent="center"
          pos="relative"
          overflow="hidden"
        >
          <MotionImage
            src="/illustrations/skills.svg"
            background="linear-gradient(rgba(49, 151, 149,0.3),rgba(21, 127, 207,0.9))"
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
        <Flex
          h={{ sm: 'full', md: '100vh' }}
          justifyContent="center"
          alignItems="flex-start"
          p={10}
        >
          <WhileInView>
            <SectionTitle title="Skills" />
            <Text my={4} lineHeight="2em">
              This is my list of technology skills I currently know and you can view my resume as
              well:
            </Text>
            <Box w="100%">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={GoGear} color="blue.500" />
                  React
                </ListItem>
                <ListItem>
                  <ListIcon as={GoGear} color="blue.500" />
                  Next.JS
                </ListItem>
                <ListItem>
                  <ListIcon as={GoGear} color="blue.500" />
                  HTML
                </ListItem>
                <ListItem>
                  <ListIcon as={GoGear} color="blue.500" />
                  CSS
                </ListItem>
                <ListItem>
                  <ListIcon as={GoGear} color="blue.500" />
                  SASS
                </ListItem>
                <ListItem>
                  <ListIcon as={GoGear} color="blue.500" />
                  Less
                </ListItem>
                <ListItem>
                  <ListIcon as={GoGear} color="blue.500" />
                  Python
                </ListItem>
              </List>
              <Button colorScheme="teal" p={5} mt={5} size="sm">
                Downlaod Resume
              </Button>
            </Box>
          </WhileInView>
        </Flex>
      </SimpleGrid>
    </Element>
  )
}
