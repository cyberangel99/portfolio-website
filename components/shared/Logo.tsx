import { Image } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'

export default function Logo({ width = '100%', height = '120px' }) {
  return (
    <Image
      src="./images/logo-1.png"
      alt="Logo"
      maxW={width}
      maxH={height}
      transition="all ease .5s"
    />
  )
}

Logo.propTypes = {
  height: PropTypes.string || PropTypes.number,
  width: PropTypes.string || PropTypes.number
}
