import { Box, Heading, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

export default function SectionTitle({ title, subtitle }: { title?: string; subtitle: ReactNode }) {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={2} variant="line">
        {title.toUpperCase()}
      </Heading>
      <Text opacity=".7" mb={8} as="div">
        {subtitle}
      </Text>
    </Box>
  )
}
