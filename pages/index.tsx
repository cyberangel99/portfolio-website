import { NextSeo } from 'next-seo'
import React from 'react'

import About from '../components/home/About'
import Hero from '../components/home/Hero'
import AppLayout from '../components/layouts/AppLayout'
import CTA from '../components/shared/CTA'
import Services from '../components/shared/Services'
import Testimonials from '../components/shared/Testimonials'
import { getPosts } from '../services/posts'

export async function getStaticProps() {
  try {
    const query = { pageSize: 3 }
    const posts = await getPosts(query)
    return {
      revalidate: 10,
      props: {
        posts: posts.results
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default function HomePage() {
  return (
    <>
      <NextSeo title="Home" />
      <AppLayout>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <CTA />
      </AppLayout>
    </>
  )
}
