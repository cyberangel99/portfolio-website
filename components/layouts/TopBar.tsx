import { Alert, Container, HStack, Icon, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

export default function TopBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1, duration: 0.3 }
      }}
    >
      <Alert status="info" colorScheme="primary" variant="solid" p={0}>
        <Container
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
          textAlign="center"
        >
          <HStack justifyContent="center">
            <Icon as={FiAlertTriangle} boxSize={5} />
            <Text py={4}>IMPORTANT MESSAGE GOES HERE</Text>
          </HStack>
        </Container>
      </Alert>
    </motion.section>
  )
}
