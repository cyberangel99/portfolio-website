/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  AspectRatio,
  Box,
  Code,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import parse from 'html-react-parser'
import NextLink from 'next/link'
import { RichText, Elements, RichTextBlock } from 'prismic-reactjs'
import React from 'react'

import linkResolver from '../../utils/linkResolver'

const htmlSerializer = (type, element, content, children, key) => {
  switch (type) {
    case Elements.paragraph:
      return (
        <Text my={4} key={key} as="p" lineHeight="2">
          {children}
        </Text>
      )
    case Elements.heading1:
      return (
        <Heading as="h1" my={4} key={key}>
          {children}
        </Heading>
      )
    case Elements.heading2:
      return (
        <Heading as="h2" my={4} key={key}>
          {children}
        </Heading>
      )
    case Elements.heading3:
      return (
        <Heading as="h3" my={4} key={key}>
          {children}
        </Heading>
      )
    case Elements.heading4:
      return (
        <Heading as="h4" my={4} key={key}>
          {children}
        </Heading>
      )
    case Elements.heading5:
      return (
        <Heading as="h5" my={4} key={key}>
          {children}
        </Heading>
      )
    case Elements.heading6:
      return (
        <Heading as="h6" my={4} key={key}>
          {children}
        </Heading>
      )
    case Elements.hyperlink:
      return (
        <NextLink key={key} href={linkResolver(element.data)} passHref>
          <Link textDecor="underline" target={element?.data?.target}>
            {children}
          </Link>
        </NextLink>
      )
    case Elements.list:
      return (
        <UnorderedList my={4} key={key}>
          {children}
        </UnorderedList>
      )
    case Elements.listItem:
      return (
        <ListItem my={2} key={key}>
          {children}
        </ListItem>
      )
    case Elements.oList:
      return <OrderedList key={key}>{children}</OrderedList>
    case Elements.oListItem:
      return (
        <ListItem my={2} key={key}>
          {children}
        </ListItem>
      )
    case Elements.em:
      return (
        <Text as="em" key={key} fontStyle="italic">
          {children}
        </Text>
      )
    case Elements.strong:
      return (
        <Text as="strong" key={key} fontWeight="bold">
          {content}
        </Text>
      )
    case Elements.span:
      return (
        <Text as="span" key={key}>
          {content}
        </Text>
      )
    case Elements.image:
      return (
        <Image
          borderRadius={5}
          maxW="100%"
          key={key}
          alt={element?.alt}
          src={element?.url}
          my={12}
        />
      )
    case Elements.preformatted:
      return (
        <Code key={key} borderRadius={5} overflow="auto" w="full" p={4} my={4} as="pre" maxW="full">
          {children}
        </Code>
      )
    case Elements.embed:
      const elem = parse(element?.oembed?.html) as JSX.Element

      return (
        <Box key={key}>
          {elem.type === 'iframe' && (
            <AspectRatio maxW="full" ratio={16 / 9} my={10}>
              <Box
                as="iframe"
                title={element?.oembed?.embed_url}
                src={elem?.props?.src}
                allowFullScreen
                frameBorder="0"
                borderRadius={5}
              />
            </AspectRatio>
          )}
        </Box>
      )
    // Return null to stick with the default behavior
    default:
      return null
  }
}

export default function RenderRichText({ content }: { content: RichTextBlock[] }) {
  return (
    <Box>
      <RichText render={content} htmlSerializer={htmlSerializer} linkResolver={linkResolver} />
    </Box>
  )
}
