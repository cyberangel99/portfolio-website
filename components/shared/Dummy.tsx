import { Stack, Button, Flex, Heading, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function Dummy() {
  // declaring a new state variable
  const [count, setCounter] = useState(0)

  useEffect(() => {
    // Set counter to 5 when the component mounts (loads)
    setCounter(5)
  }, [])

  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
        <Heading size="xl" mb={6}>
          {count}
        </Heading>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid" onClick={() => setCounter(count + 1)}>
            Increase
          </Button>
          <Button colorScheme="red" variant="outline" onClick={() => setCounter(count - 1)}>
            Decrease
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}

// how to make react components with export, can place export at beginnning or after component.
// https://reactjs.org/docs/components-and-props.html - Make components

/*
function component and exporting component
const Dummy = () => {

}
export default Dummy


importing component with export class 
// import { Component } from 'react'
export class Dummy extends Component {

  render() {
    return (
      <div>
        dsfadsfs
      </div>
    )
  }
} */
