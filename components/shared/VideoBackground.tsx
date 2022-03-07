import { Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export default function VideoBackground({
  poster = '',
  src = ''
}: {
  poster?: string
  src?: string
}) {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const videoProps = {
    as: 'video',
    loop: true,
    muted: true,
    autoPlay: true,
    playsInline: true,
    pos: 'absolute',
    poster,
    objectFit: 'cover',
    zIndex: -1,
    h: 'full',
    w: 'full',
    maxW: 'full',
    top: 0,
    left: 0
  } as any
  return (
    <>
      {!isMobile && <Box {...videoProps} src={src} />}
      {isMobile && <Box {...videoProps} />}
    </>
  )
}
