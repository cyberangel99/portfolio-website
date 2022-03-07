import Prismic from '@prismicio/client'

const PrismicClient = Prismic.client(process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT, {
  accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN
})

export { PrismicClient, Prismic }
