import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { store } from '../state/store'
import '../styles/app.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import chakraUITheme from '../utils/theme'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  const { NEXT_PUBLIC_WEBSITE_NAME } = process.env
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s - ${NEXT_PUBLIC_WEBSITE_NAME}`}
        defaultTitle={NEXT_PUBLIC_WEBSITE_NAME}
        description=""
      />
      <ChakraProvider theme={chakraUITheme}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Provider>
      </ChakraProvider>
    </>
  )
}
