import { Box, HStack, IconButton, Link, Tooltip } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

export default function SocialMediaIcons() {
  const MotionLink = motion(Link)
  const MotionHStack = motion(HStack)
  return (
    <Box overflow="hidden">
      <MotionHStack
        spacing="7px"
        my={5}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.7 } }
        }}
      >
        <MotionLink
          href="/"
          target="_blank"
          variants={{
            hidden: { opacity: 0, x: -5 },
            show: { opacity: 1, x: 0 }
          }}
        >
          <Tooltip label="Facebook" fontWeight="light" borderRadius={4} hasArrow placement="bottom">
            <IconButton
              aria-label="Facebook"
              icon={<FiFacebook />}
              boxSize={8}
              colorScheme="facebook"
            />
          </Tooltip>
        </MotionLink>
        <MotionLink
          href="/"
          target="_blank"
          variants={{
            hidden: { opacity: 0, y: -5 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <Tooltip label="LinkedIn" fontWeight="light" borderRadius={4} hasArrow placement="bottom">
            <IconButton
              aria-label="Linkedin"
              icon={<FiLinkedin />}
              boxSize={8}
              colorScheme="linkedIn"
            />
          </Tooltip>
        </MotionLink>
        <MotionLink
          href="/"
          target="_blank"
          variants={{
            hidden: { opacity: 0, y: -5 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <Tooltip
            label="Instagram"
            fontWeight="light"
            borderRadius={4}
            hasArrow
            placement="bottom"
          >
            <IconButton
              aria-label="Instagram"
              icon={<FiInstagram />}
              boxSize={8}
              colorScheme="instagram"
            />
          </Tooltip>
        </MotionLink>
        <MotionLink
          href="/"
          target="_blank"
          variants={{
            hidden: { opacity: 0, y: -5 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <Tooltip label="Twitter" fontWeight="light" borderRadius={4} hasArrow placement="bottom">
            <IconButton
              aria-label="Twitter"
              icon={<FiTwitter />}
              boxSize={8}
              colorScheme="twitter"
            />
          </Tooltip>
        </MotionLink>
        <MotionLink
          href="/"
          target="_blank"
          variants={{
            hidden: { opacity: 0, y: -5 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <Tooltip label="YouTube" fontWeight="light" borderRadius={4} hasArrow placement="bottom">
            <IconButton
              aria-label="YouTube"
              icon={<FiYoutube />}
              boxSize={8}
              colorScheme="youtube"
            />
          </Tooltip>
        </MotionLink>
      </MotionHStack>
    </Box>
  )
}
