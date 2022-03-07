import { Box, IconButton, Tooltip } from '@chakra-ui/react'
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FiChevronsUp } from 'react-icons/fi'
import { Link as ScrollLink } from 'react-scroll'

export default function BackToTop() {
  const MotionBox = motion(Box)
  const { scrollY } = useViewportScroll()
  const [position, setPosition] = useState(scrollY.get())

  useEffect(() => {
    setPosition(scrollY.get())
    scrollY.onChange((pos: number) => {
      setPosition(pos)
    })
  }, [scrollY, position])

  const visible = {
    opacity: 1,
    y: 0,
    transition: { delay: 1.0, duration: 0.5 }
  }
  const exit = { opacity: 0, y: 50, transition: { delay: 0.2, duration: 0.5 } }

  return (
    <ScrollLink to="top" spy smooth duration={700}>
      <AnimatePresence exitBeforeEnter initial={false}>
        {position > 200 && (
          <MotionBox
            pos="fixed"
            bottom={0}
            right={10}
            zIndex={99}
            animate={visible}
            enter={visible}
            exit={exit}
          >
            <Tooltip
              label="Back To Top"
              fontWeight="light"
              borderRadius={4}
              hasArrow
              placement="top"
            >
              <IconButton
                borderBottomEndRadius={0}
                borderBottomStartRadius={0}
                variant="solid"
                w={50}
                colorScheme="accent"
                outline="none !important"
                aria-label="Back to top"
                icon={<FiChevronsUp />}
              />
            </Tooltip>
          </MotionBox>
        )}
      </AnimatePresence>
    </ScrollLink>
  )
}
