import {
  Flex,
  SimpleGrid,
  useColorModeValue,
  Divider,
  HStack,
  Button,
  Image,
  Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Element } from 'react-scroll'

import { HASH_ROUTES } from '../../constants'
import SectionTitle from '../shared/SectionTitle'
import SmoothScrollLink from '../shared/SmoothScrollLink'
import WhileInView from '../shared/WhileInView'

export default function About() {
  const aboutImage = useColorModeValue('about.svg', 'about.svg')
  const bg = useColorModeValue('gray.100', 'gray.600')

  const MotionImage = motion(Image)

  return (
    <Element name={HASH_ROUTES.ABOUT}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
        <Flex h={{ base: 'auto' }} justifyContent="center" alignItems="flex-start" p={10}>
          <WhileInView>
            <SectionTitle title="About Us" subtitle="Libero id faucibus nisl tincidunt." />
            <Text my={4} lineHeight="2em">
              Libero id faucibus nisl tincidunt. Bibendum neque egestas congue quisque egestas diam.
              Felis eget nunc lobortis mattis aliquam faucibus purus. Eu facilisis sed odio morbi
              quis. Nibh nisl condimentum id venenatis a.
            </Text>
            <Text my={4} lineHeight="2em">
              Libero id faucibus nisl tincidunt. Bibendum neque egestas congue quisque egestas diam.
              Felis eget nunc lobortis mattis aliquam faucibus purus. Eu facilisis sed odio morbi
              quis. Nibh nisl condimentum id venenatis a.
            </Text>
            <Text my={4} lineHeight="2em">
              Libero id faucibus nisl tincidunt. Bibendum neque egestas congue quisque egestas diam.
              Felis eget nunc lobortis mattis aliquam faucibus purus. Eu facilisis sed odio morbi
              quis. Nibh nisl condimentum id venenatis a.
            </Text>
            <Divider my={8} />
            <HStack>
              <SmoothScrollLink to={HASH_ROUTES.SERVICES}>
                <Button colorScheme="accent" leftIcon={<FiChevronDown />}>
                  OUR SERVICES
                </Button>
              </SmoothScrollLink>
            </HStack>
          </WhileInView>
        </Flex>
        <Flex
          h={{ base: 'auto', lg: 'auto' }}
          p={4}
          alignItems="center"
          justifyContent="center"
          bg={bg}
          pos="relative"
          overflow="hidden"
        >
          <MotionImage
            src={`/illustrations/${aboutImage}`}
            alt="About"
            maxW="full"
            w="full"
            h="full"
            maxH={400}
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
