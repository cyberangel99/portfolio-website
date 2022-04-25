import { Box, Container, Flex, Text, Link, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { Element } from 'react-scroll'

import { HASH_ROUTES } from '../../constants'
import ContactForm from '../contact/ContactForm'
import ContactItem from '../contact/ContactItem'
import SectionTitle from '../shared/SectionTitle'
import WhileInView from '../shared/WhileInView'

export default function Contact() {
  return (
    <Element name={HASH_ROUTES.CONTACT}>
      <WhileInView>
        <Box minH="100vh">
          <Container maxW="container.xl" p={10}>
            <Flex my={8} justifyContent="center" direction="column" textAlign="left">
              <SectionTitle
                title="Contact Me"
                subtitle={
                  <Text>
                    You can email me directly at{' '}
                    <Link
                      textDecor="underline"
                      title="Email us!"
                      href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Message from website`}
                    >
                      {process.env.NEXT_PUBLIC_EMAIL}
                    </Link>{' '}
                    if you don't want to fill out this form.
                  </Text>
                }
              />
              <SimpleGrid columns={{ md: 1, lg: 3 }} gap={4}>
                <ContactItem
                  text={process.env.NEXT_PUBLIC_PHONE}
                  url={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                  icon={FiPhone}
                />
                <ContactItem
                  text={process.env.NEXT_PUBLIC_EMAIL}
                  url={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  icon={FiMail}
                />
                <ContactItem
                  text="Houston, Texas"
                  target="_blank"
                  url="https://www.google.com/maps/place/Houston,+TX/@29.8174782,-95.6814762,10z/data=!3m1!4b1!4m5!3m4!1s0x8640b8b4488d8501:0xca0d02def365053b!8m2!3d29.7604284!4d-95.3697824"
                  icon={FiMapPin}
                />
              </SimpleGrid>
            </Flex>
            <ContactForm />
          </Container>
        </Box>
      </WhileInView>
    </Element>
  )
}
